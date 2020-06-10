import classnames from 'classnames';
import flowplayer from 'flowplayer-files';
import chromecast from 'flowplayer-files/lib/plugins/chromecast.min';
import cuepoints from 'flowplayer-files/lib/plugins/cuepoints.min';
import subtitles from 'flowplayer-files/lib/plugins/subtitles.min';
import { get } from 'lodash-es';
import React, { createRef } from 'react';

import { formatDuration } from '../../helpers';
import { DefaultProps } from '../../types';
import { AspectRatioWrapper } from '../AspectRatioWrapper/AspectRatioWrapper';
import { Icon } from '../Icon/Icon';

import './FlowPlayer.scss';

flowplayer.extensions.push(chromecast);
flowplayer.extensions.push(cuepoints);
flowplayer.extensions.push(subtitles);

interface FlowplayerInstance extends HTMLVideoElement {
	destroy: Function;
	on: Function;
	emit: Function;
}

export interface FlowPlayerPropsSchema extends DefaultProps {
	src: string | null;
	poster?: string;
	logo?: string;
	title: string;
	subtitles?: string[];
	start?: number | null;
	end?: number | null;
	onInit?: () => void;
	token?: string;
	dataPlayerId?: string;
	autoplay?: boolean;
	seekTime?: number;
	onPlay?: () => void;
	onPause?: () => void;
	onEnded?: () => void;
	onTimeUpdate?: (time: number) => void;
	canPlay?: boolean; // Indicates if the video can play at this type. Eg: will be set to false if a modal is open in front of the video player
}

interface FlowPlayerState {
	flowPlayerInstance: FlowplayerInstance | null;
}

export class FlowPlayer extends React.Component<FlowPlayerPropsSchema, FlowPlayerState> {
	private videoContainerRef = createRef<HTMLDivElement>();

	constructor(props: FlowPlayerPropsSchema) {
		super(props);
		this.state = {
			flowPlayerInstance: null,
		};
	}

	private destroyPlayer() {
		const flowPlayerInstance = this.state.flowPlayerInstance;
		if (flowPlayerInstance) {
			flowPlayerInstance.destroy();
			if (flowPlayerInstance.parentElement) {
				flowPlayerInstance.parentElement.innerHTML = '';
			}
		}
	}

	componentWillUnmount() {
		this.destroyPlayer();
	}

	shouldComponentUpdate(nextProps: FlowPlayerPropsSchema) {
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

		if (nextProps.src !== this.props.src) {
			if (nextProps.src) {
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

	componentDidMount() {
		if (this.props.src) {
			this.reInitFlowPlayer(this.props);
		}
	}

	private createTitleOverlay() {
		const titleOverlay = document.createElement('div');
		titleOverlay.className = 'a-flowplayer__title';
		const titleHeader = document.createElement('h5');
		const publishDiv = document.createElement('div');

		titleOverlay.classList.add('c-title-overlay');
		titleHeader.classList.add('c-title-overlay__title');
		publishDiv.classList.add('u-d-flex');

		titleHeader.innerText = this.props.title;

		titleOverlay.appendChild(titleHeader);
		titleOverlay.appendChild(publishDiv);

		if (this.props.subtitles && this.props.subtitles.length) {
			this.props.subtitles.forEach((subtitle: string) => {
				const substitleDiv = document.createElement('div');
				substitleDiv.innerText = subtitle;
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

	private drawCustomElements(flowplayerInstance: FlowplayerInstance) {
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

	private cuePointEndListener() {
		if (this.state && this.state.flowPlayerInstance) {
			this.state.flowPlayerInstance.pause();
		}
	}

	private reInitFlowPlayer(props: FlowPlayerPropsSchema) {
		this.destroyPlayer();

		if (!this.videoContainerRef.current) {
			return;
		}

		const flowplayerInstance: FlowplayerInstance = flowplayer(this.videoContainerRef.current, {
			// DATA
			src: props.src,
			token: props.token,

			// CONFIGURATION
			autoplay: !this.props.src || this.props.autoplay,
			ui: flowplayer.ui.LOGO_ON_RIGHT | flowplayer.ui.USE_DRAG_HANDLE,
			plugins: ['subtitles', 'chromecast', 'cuepoints'],
			preload: props.src && !props.poster ? 'metadata' : 'none',

			// CUEPOINTS
			...(props.end ? { cuepoints: [{ start: props.start, end: props.end }] } : {}), // Only set cuepoints if end is passed
			draw_cuepoints: true,
		});

		if (!flowplayerInstance) {
			console.error('Failed to init flow player');
			return;
		}

		// Start video at start cuepoint
		if (props.start) {
			flowplayerInstance.currentTime = props.start;
		}

		// Pause video at end cuepoint
		if (props.end) {
			flowplayerInstance.on(flowplayer.events.CUEPOINT_END, this.cuePointEndListener);
		}

		this.drawCustomElements(flowplayerInstance);

		flowplayerInstance.on('playing', this.props.onPlay || (() => {}));
		flowplayerInstance.on('pause', this.props.onPause || (() => {}));
		flowplayerInstance.on('ended', this.props.onEnded || (() => {}));
		flowplayerInstance.on('timeupdate', () => {
			(this.props.onTimeUpdate || (() => {}))(
				get(this.videoContainerRef, 'current.currentTime', 0)
			);
		});

		this.setState({
			flowPlayerInstance: flowplayerInstance,
		});
	}

	private handlePosterClicked = () => {
		if (!this.props.src) {
			if (this.props.onInit) {
				this.props.onInit();
			}
		} else {
			if (this.state.flowPlayerInstance) {
				this.state.flowPlayerInstance.play();
			}
		}
	};

	render() {
		return (
			<div className={classnames(this.props.className, 'c-video-player')}>
				<div
					className={classnames('c-video-player-inner', {
						'c-video-player__initialized': !!this.props.src,
					})}
					data-player-id={this.props.dataPlayerId}
					ref={this.videoContainerRef}
				/>
				<div
					className="c-video-player-inner c-video-player__overlay"
					onClick={this.handlePosterClicked}
				>
					<AspectRatioWrapper
						className="c-video-player__item c-video-player__thumbnail"
						style={{ backgroundImage: `url(${this.props.poster})` }}
					/>
					<div className="c-play-overlay">
						<div className="c-play-overlay__inner">
							<Icon name="play" className="c-play-overlay__button" />
						</div>
					</div>
					{(this.props.start || this.props.start === 0) && this.props.end && (
						<div className="c-cut-overlay">
							<Icon name="scissors" />
							{`${formatDuration(this.props.start)} - ${formatDuration(this.props.end)}`}
						</div>
					)}
				</div>
			</div>
		);
	}
}
