import flowplayer, { Config, Player } from '@flowplayer/player';
import '@flowplayer/player/flowplayer.css';
import cuepointsPlugin from '@flowplayer/player/plugins/cuepoints';
import googleAnalyticsPlugin from '@flowplayer/player/plugins/google-analytics';
import hlsPlugin from '@flowplayer/player/plugins/hls';
import keyboardPlugin from '@flowplayer/player/plugins/keyboard';
import playlistPlugin from '@flowplayer/player/plugins/playlist';
import subtitlesPlugin from '@flowplayer/player/plugins/subtitles';
import classnames from 'classnames';
import { get, noop } from 'lodash-es';
import React, { createRef, ReactNode } from 'react';
import { default as Scrollbar } from 'react-scrollbars-custom';

import { DefaultProps, EnglishContentType } from '../../types';
import { MediaCard } from '../MediaCard/MediaCard';
import { MediaCardThumbnail } from '../MediaCard/MediaCard.slots';
import { Thumbnail } from '../Thumbnail/Thumbnail';

import './FlowPlayer.scss';

flowplayer(
	subtitlesPlugin,
	hlsPlugin,
	cuepointsPlugin,
	keyboardPlugin,
	playlistPlugin,
	googleAnalyticsPlugin
);

export type FlowplayerPlugin =
	| 'subtitles'
	| 'hls'
	| 'cuepoints'
	| 'keyboard'
	| 'playlist'
	| 'ga'
	| 'chromecast'
	| 'airplay';

export type GoogleAnalyticsEvent =
	| 'fullscreen_enter'
	| 'fullscreen_exit'
	| 'video_player_load'
	| 'video_start'
	| 'video_click_play'
	| 'video_pause'
	| 'video_resume'
	| 'video_mute'
	| 'video_unmute'
	| 'video_25_percent'
	| 'video_50_percent'
	| 'video_75_percent'
	| 'video_complete'
	| 'live_start'
	| 'live_click_play'
	| 'live_pause'
	| 'live_resume'
	| 'live_mute'
	| 'live_unmute'
	| 'live_complete'
	| 'ad_start_preroll'
	| 'ad_start_midroll'
	| 'ad_start_postroll'
	| 'ad_completed_preroll'
	| 'ad_completed_midroll'
	| 'ad_completed_postroll'
	| 'ad_skipped_preroll'
	| 'ad_skipped_midroll'
	| 'ad_skipped_postroll';

type Cuepoints = {
	start: number | null | undefined;
	end: number;
}[];

export interface FlowplayerTrackSchema {
	crossorigin?: 'use-credentials' | 'anonymous';
	default: boolean;
	id?: string;
	kind?: 'captions' | 'subtitles' | 'descriptions';
	label: string;
	lang?: string;
	src: string;
}

export type FlowplayerSourceList = {
	type: 'flowplayer/playlist';
	items: {
		src: string;
		title: string;
		cover?: string;
		category: EnglishContentType;
		thumbnail: string;
		provider: string;
		thumbnailAlt?: string;
	}[];
};

export interface FlowPlayerPropsSchema extends DefaultProps {
	src: string | FlowplayerSourceList;
	poster?: string;
	logo?: string;
	title?: string;
	metadata?: string[];
	start?: number | null;
	end?: number | null;
	speed?: {
		options: number[];
		labels: string[];
	};
	token?: string;
	dataPlayerId?: string;
	autoplay?: boolean;
	seekTime?: number;
	onPlay?: () => void;
	onPause?: () => void;
	onEnded?: () => void;
	onTimeUpdate?: (time: number) => void;
	preload?: 'none' | 'auto' | 'metadata';
	plugins?: FlowplayerPlugin[];
	subtitles?: FlowplayerTrackSchema[];
	canPlay?: boolean; // Indicates if the video can play at this type. Eg: will be set to false if a modal is open in front of the video player
	className?: string;
	googleAnalyticsId?: string;
	googleAnalyticsEvents?: GoogleAnalyticsEvent[];
	googleAnalyticsTitle?: string;
}

interface FlowPlayerState {
	flowPlayerInstance: Player | null;
	startedPlaying: boolean;
}

export const convertGAEventsArrayToObject = (
	googleAnalyticsEvents: GoogleAnalyticsEvent[]
): any => {
	return googleAnalyticsEvents.reduce((acc: any, curr: GoogleAnalyticsEvent) => {
		acc[curr] = curr;

		return acc;
	}, {});
};

export class FlowPlayer extends React.Component<FlowPlayerPropsSchema, FlowPlayerState> {
	private videoContainerRef = createRef<HTMLDivElement>();

	constructor(props: FlowPlayerPropsSchema) {
		super(props);
		this.state = {
			flowPlayerInstance: null,
			startedPlaying: false,
		};
	}

	private destroyPlayer() {
		this.setState((state) => {
			const flowPlayerInstance = state.flowPlayerInstance;
			if (flowPlayerInstance) {
				flowPlayerInstance.destroy();
				if (flowPlayerInstance.parentElement) {
					flowPlayerInstance.parentElement.innerHTML = '';
				}
			}
		});
		document.querySelectorAll('.fp-skip-prev,.fp-skip-next').forEach((elem) => elem.remove());
	}

	componentWillUnmount(): void {
		this.destroyPlayer();
	}

	shouldComponentUpdate(nextProps: FlowPlayerPropsSchema): boolean {
		if (!this.videoContainerRef.current) {
			return true;
		}

		const flowPlayerInstance = this.state.flowPlayerInstance;
		if (flowPlayerInstance) {
			if (nextProps.seekTime !== this.props.seekTime && nextProps.seekTime) {
				flowPlayerInstance.currentTime = nextProps.seekTime;
			}

			if (nextProps.start !== this.props.start || nextProps.end !== this.props.end) {
				if (this.videoContainerRef) {
					flowPlayerInstance.emit(flowplayer.events.CUEPOINTS, {
						cuepoints: [
							{
								start: nextProps.start,
								end: nextProps.end,
							},
						],
					});
				}
			}

			// Pause video when modal opens in front
			// Or pause video when modal is closed which contains this flowplayer
			if (!nextProps.canPlay && this.props.canPlay) {
				flowPlayerInstance.pause();
			}
		}

		if (nextProps.poster !== this.props.poster && (this.props.poster || nextProps.poster)) {
			// Video was changed before playing the video
			return true;
		}

		// Get the first part of the first video src, to see if the video url changed
		const nextUrl: string | undefined =
			nextProps.src &&
			(
				(nextProps.src as FlowplayerSourceList)?.items?.[0]?.src ||
				(nextProps.src as string)
			)?.split('?')[0];
		const currentUrl: string | undefined =
			this.props.src &&
			(
				(this.props.src as FlowplayerSourceList)?.items?.[0]?.src ||
				(this.props.src as string)
			)?.split('?')[0];
		if (nextUrl !== currentUrl) {
			if (nextUrl) {
				// User clicked the post to play the video
				this.reInitFlowPlayer(nextProps);
			} else {
				// User clicked another video and the video src has been set to undefined
				this.destroyPlayer();
			}
			return true;
		}

		return false;
	}

	componentDidMount(): void {
		if (this.props.src) {
			this.reInitFlowPlayer(this.props);
		}
	}

	private createTitleOverlay() {
		const titleOverlay = document.createElement('div');
		titleOverlay.classList.add('c-title-overlay');

		const publishDiv = document.createElement('div');
		publishDiv.classList.add('u-d-flex');

		if (this.props.title) {
			const titleHeader = document.createElement('h5');
			titleHeader.classList.add('c-title-overlay__title');
			titleHeader.innerText = this.props.title || '';
			titleOverlay.appendChild(titleHeader);
		}

		titleOverlay.classList.add('a-flowplayer__title');
		titleOverlay.appendChild(publishDiv);

		if (this.props.metadata && this.props.metadata.length) {
			this.props.metadata.forEach((metadata: string) => {
				const substitleDiv = document.createElement('div');
				substitleDiv.innerText = metadata;
				substitleDiv.classList.add('c-title-overlay__meta');
				publishDiv.appendChild(substitleDiv);
			});
		}

		return titleOverlay;
	}

	private createLogoOverlay() {
		if (this.props.logo) {
			const logoOverlay = document.createElement('div');
			const logoImg = document.createElement('img');

			logoOverlay.classList.add('c-logo-overlay');
			logoImg.classList.add('c-logo-overlay__img');

			logoImg.src = this.props.logo;

			logoOverlay.appendChild(logoImg);

			return logoOverlay;
		}
	}

	private drawCustomElements(flowplayerInstance: Player) {
		if (!flowplayerInstance.parentElement) {
			return;
		}
		const flowPlayerUi = flowplayerInstance.parentElement.querySelector('.fp-ui');
		const titleElem = this.createTitleOverlay();
		const logoElem = this.createLogoOverlay();
		if (flowPlayerUi) {
			flowPlayerUi.prepend(titleElem);
			if (logoElem) {
				flowPlayerUi.prepend(logoElem);
			}
		}
	}

	private static cuePointEndListener(flowplayerInstance: Player | null | undefined) {
		if (flowplayerInstance) {
			flowplayerInstance.pause();
			// Trigger the ended event, so in autoplay mode the next video can be started
			flowplayerInstance.emit(flowplayer.events.ENDED);
		}
	}

	private reInitFlowPlayer(props: FlowPlayerPropsSchema) {
		this.destroyPlayer();

		if (!this.videoContainerRef.current) {
			return;
		}

		const plugins = props.plugins || [
			'subtitles',
			'cuepoints',
			'hls',
			'ga',
			'keyboard',
			'playlist',
			// 'chromecast', 'airplay', // Disabled for now for video security: https://meemoo.atlassian.net/browse/AVO-1859
		];

		const flowPlayerConfig: Config & {
			cuepoints?: Cuepoints;
			draw_cuepoints?: boolean;
			subtitles?: { tracks: FlowplayerTrackSchema[] };
			chromecast?: any;
			keyboard?: any;
			speed: any;
			plugins: FlowplayerPlugin[];
		} = {
			// DATA
			src: props.src,
			token: props.token,
			poster: props.poster,

			// CONFIGURATION
			autoplay: props.autoplay ? flowplayer.autoplay.ON : flowplayer.autoplay.OFF,
			ui: (flowplayer as any).ui.LOGO_ON_RIGHT | (flowplayer as any).ui.USE_DRAG_HANDLE,
			plugins,
			preload: props.preload || (!props.poster ? 'metadata' : 'none'),

			// KEYBOARD
			...(plugins.includes('keyboard') ? { keyboard: { seek_step: '15' } } : {}),

			// SPEED
			speed: props.speed,

			// CUEPOINTS
			...(plugins.includes('cuepoints') && props.end // Only set cuepoints if an end point was passed in the props
				? {
						cuepoints: [
							{
								start: props.start,
								end: props.end,
							},
						],
						draw_cuepoints: true,
				  }
				: {}),

			// PLAYLIST
			...(plugins.includes('playlist')
				? {
						playlist: {
							advance: true,
							skip_controls: true,
						},
				  }
				: {}),

			// SUBTITLES
			...(plugins.includes('subtitles') && props.subtitles
				? {
						subtitles: {
							tracks: props.subtitles,
						},
				  }
				: {}),

			// CHROMECAST
			...(plugins.includes('chromecast')
				? {
						chromecast: {
							app: (flowplayer as any).chromecast.apps.STABLE,
						},
				  }
				: {}),

			// GOOGLE ANALYTICS
			...(plugins.includes('ga') && props.googleAnalyticsId
				? {
						ga: {
							ga_instances: [props.googleAnalyticsId],
							event_actions: props.googleAnalyticsEvents
								? convertGAEventsArrayToObject(props.googleAnalyticsEvents)
								: {},
							media_title: props.googleAnalyticsTitle || props.title,
						},
				  }
				: {}),
		};

		const flowplayerInstance: Player = flowplayer(
			this.videoContainerRef.current as HTMLElement,
			flowPlayerConfig
		);

		if (!flowplayerInstance) {
			console.error('Failed to init flow player');
			return;
		}

		// Pause video at end cuepoint
		if (props.end) {
			flowplayerInstance.on(flowplayer.events.CUEPOINT_END, () =>
				FlowPlayer.cuePointEndListener(flowplayerInstance)
			);
		}

		flowplayerInstance.on('error', (err: any) => {
			console.error(err);
		});

		if (plugins.includes('playlist')) {
			flowplayerInstance.on('playlist:ready', () => {
				console.log('playlist is ready');
				// Update cover images on the playlist
				document
					.querySelectorAll('.fp-playlist li .video-info')
					.forEach((elem, elemIndex) => {
						const image = document.createElement('img');
						image.src = (this.props.src as FlowplayerSourceList).items[elemIndex]
							.cover as string;
						const div = document.createElement('div');
						div.classList.add('image');
						div.appendChild(image);
						elem.append(div);
					});
			});
		}

		this.drawCustomElements(flowplayerInstance);

		flowplayerInstance.on('playing', () => {
			if (!this.state.startedPlaying) {
				// First time playing the video
				// Jump to first cue point if exists:
				if (props.start) {
					flowplayerInstance.currentTime = props.start;
				}

				if (this.props.onPlay) {
					this.props.onPlay();
				}

				this.setState({
					...this.state,
					startedPlaying: true,
				});
			}
		});
		flowplayerInstance.on('pause', this.props.onPause || noop);
		flowplayerInstance.on('ended', this.props.onEnded || noop);
		flowplayerInstance.on('timeupdate', () => {
			(this.props.onTimeUpdate || noop)(
				get(this.videoContainerRef, 'current.currentTime', 0)
			);
		});

		this.setState({
			flowPlayerInstance: flowplayerInstance,
		});
	}

	render(): ReactNode {
		const playlistItems = (this.props.src as FlowplayerSourceList)?.items;
		return (
			<div className={classnames(this.props.className, 'c-video-player')}>
				<div
					className={classnames('c-video-player-inner')}
					data-player-id={this.props.dataPlayerId}
					ref={this.videoContainerRef}
				/>
				{playlistItems && (
					<Scrollbar
						className="c-video-player__playlist"
						style={{
							width: '30%',
							height: '500px',
						}}
					>
						<ul>
							{playlistItems.map((item, itemIndex) => {
								return (
									<li key={item.src + '--' + itemIndex}>
										<MediaCard
											title={item.title}
											onClick={() =>
												(
													this.state.flowPlayerInstance as any
												)?.playlist?.play(itemIndex)
											}
											orientation="vertical"
											category="search" // Clearest color on white background
										>
											<MediaCardThumbnail>
												<Thumbnail
													category={item.category}
													src={item.thumbnail}
													meta={item.provider}
													label={item.category}
													alt={item.thumbnailAlt}
												/>
											</MediaCardThumbnail>
										</MediaCard>
									</li>
								);
							})}
						</ul>
					</Scrollbar>
				)}
			</div>
		);
	}
}
