import React, { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from 'react';

import { Icon } from '../Icon/Icon';

import './FlowPlayer.scss';

import flowplayer from 'flowplayer-files';
import 'flowplayer-files/lib/plugins/chromecast.min';
import 'flowplayer-files/lib/plugins/cuepoints.min';
import 'flowplayer-files/lib/plugins/subtitles.min';

export interface FlowPlayerProps {
	src: string | null;
	poster: string;
	logo?: string;
	title: string;
	subtitles: string[];
	start?: number | null;
	end?: number | null;
	onInit?: () => void;
	token?: string;
	dataPlayerId?: string;
	seekTime?: number;
}

export const FlowPlayer: FunctionComponent<FlowPlayerProps> = ({
	src,
	poster,
	title,
	onInit,
	start = 0,
	end = undefined,
	subtitles,
	token,
	dataPlayerId,
	seekTime,
}) => {
	const videoContainerRef = useRef(null);
	const videoPlayerRef: MutableRefObject<any | undefined> = useRef<any>();
	const [lastSeekTime, setLastSeekTime] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (typeof seekTime !== 'undefined' && seekTime !== lastSeekTime && seekTime !== 0) {
			setLastSeekTime(seekTime);
			// seekTime should be updated
			if (videoPlayerRef.current) {
				videoPlayerRef.current.currentTime = seekTime;
			}
		}
	}, [seekTime, lastSeekTime]);

	const createTitleOverlay = () => {
		const titleOverlay = document.createElement('div');
		const titleHeader = document.createElement('h5');
		const publishDiv = document.createElement('div');

		titleOverlay.classList.add('c-title-overlay');
		titleHeader.classList.add('c-title-overlay__title');
		publishDiv.classList.add('u-d-flex');

		titleHeader.innerText = title;

		titleOverlay.appendChild(titleHeader);
		titleOverlay.appendChild(publishDiv);

		subtitles.forEach((subtitle: string) => {
			const substitleDiv = document.createElement('div');
			substitleDiv.innerText = subtitle;
			substitleDiv.classList.add('c-title-overlay__meta');
			publishDiv.appendChild(substitleDiv);
		});

		return titleOverlay;
	};

	const cuePointEndListener = () => {
		if (videoContainerRef.current) {
			videoPlayerRef.current.pause();
		}
	};

	useEffect(() => {
		if (videoContainerRef.current) {
			// Initialize FlowPlayer
			videoPlayerRef.current = flowplayer(videoContainerRef.current, {
				// DATA
				poster,
				src,
				token,

				// CONFIGURATION
				autoplay: true,
				ui: flowplayer.ui.LOGO_ON_RIGHT | flowplayer.ui.USE_DRAG_HANDLE,
				plugins: ['subtitles', 'chromecast', 'cuepoints'],

				// CUEPOINTS
				...(end ? { cuepoints: [{ start, end }] } : {}), // Only set cuepoints if end is passed
				draw_cuepoints: true,
			});

			// Start video at start cuepoint
			if (start) {
				videoPlayerRef.current.currentTime = start;
			}

			// Pause video at end cuepoint
			if (end) {
				videoPlayerRef.current.on('cuepointend', cuePointEndListener);
			}
		}

		return () => {
			if (videoPlayerRef.current) {
				(videoPlayerRef.current as any).destroy();
				videoPlayerRef.current = null;
			}
		};
	}, [videoContainerRef, src, poster, title, start, end, token]);

	// Re-render start/end cuepoints when cropping video
	useEffect(() => {
		if (videoContainerRef.current) {
			videoPlayerRef.current.emit(flowplayer.events.CUEPOINTS, { cuepoints: [{ start, end }] });
		}
	}, [start, end]);

	// Draw custom elements
	flowplayer((opts: any, root: any, api: any) => {
		const mq = flowplayer.mq;

		api.on('mount', () => {
			mq('.fp-ui', root).prepend(createTitleOverlay());
		});
	});

	return src && poster ? (
		<div
			className="c-video-player t-player-skin--dark"
			data-player-id={dataPlayerId}
			ref={videoContainerRef}
		/>
	) : (
		<div className="c-video-player t-player-skin--dark" onClick={onInit}>
			<div className="c-video-player__item c-video-player__thumbnail">
				<img src={poster} alt={`Thumbnail voor video over ${title}.`} />
			</div>
			<div className="c-play-overlay">
				<div className="c-play-overlay__inner">
					<Icon name="play" className="c-play-overlay__button" />
				</div>
			</div>
		</div>
	);
};
