import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement } from 'react';

import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../Modal/Modal.slots';

import { FlowPlayer } from './FlowPlayer';
import { MOCK_FLOW_PLAYER_PROPS_FULL } from './FlowPlayer.mock';

const FlowPlayerStoryComponent = ({ children }: { children: ReactElement }) => {
	return (
		<>
			{cloneElement(children)}
			<br />
			<ButtonToolbar>
				{[0, 0.001, 10, 20, 30].map((s) => (
					<Button
						label={`${s} seconds`}
						onClick={() => {
							const playingVideo: HTMLVideoElement | null = document.querySelector(
								'.c-video-player .is-playing video'
							) as HTMLVideoElement | null;
							if (playingVideo) {
								playingVideo.currentTime = s;
							}
						}}
						key={`button-jump-${s}`}
					/>
				))}
			</ButtonToolbar>
		</>
	);
};

storiesOf('components/FlowPlayer', module)
	.addParameters({ jest: ['FlowPlayer'] })
	.add('FlowPlayer Video', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} />
		</div>
	))
	.add('FlowPlayer Video with m3u8 playlist src', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				src="https://cdn.flowplayer.com/demo_videos/jumping_waves/hls/playlist.m3u8"
			/>
		</div>
	))
	.add('FlowPlayer Thumbnail', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} />
		</div>
	))
	.add('FlowPlayer Thumbnail 4:3', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				poster={
					'https://archief-media.viaa.be/viaa/TESTBEELD/70412f5bdb594b7eb7518e261ec01d57973cba5becca46dab6870d78246c4b05/keyframes/keyframes_1_1/keyframe1.jpg'
				}
			/>
		</div>
	))
	.add('FlowPlayer without thumbnail', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} poster={undefined} />
		</div>
	))
	.add('FlowPlayer Thumbnail met Geknipt', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} start={60} end={70} />
		</div>
	))
	.add('FlowPlayer logo', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} logo="images/100x100.svg" />
		</div>
	))
	.add('FlowPlayer speeds', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				speed={{
					options: [0.5, 0.75, 1, 1.25, 1.5],
					labels: ['0.5', '0.75', 'normaal', '1.25', '1.5'],
				}}
			/>
		</div>
	))
	.add('FlowPlayer set time', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayerStoryComponent>
				<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} />
			</FlowPlayerStoryComponent>
		</div>
	))
	.add('FlowPlayer cuepoints', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} start={30} end={200} />
		</div>
	))
	.add('FlowPlayer playlist', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				plugins={['cuepoints', 'hls', 'keyboard', 'playlist']}
				src={{
					type: 'flowplayer/playlist',
					items: [
						{
							src: '//edge.flowplayer.org/bauhaus.mp4',
							title: 'Bauhaus',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-bauhaus.jpg',
							cuepoints: [{ startTime: 5, endTime: 15 }],
						},
						{
							src: '//edge.flowplayer.org/functional.mp4',
							title: 'Functional',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-functional.jpg',
							cuepoints: [{ startTime: 10, endTime: 20 }],
						},
						{
							src: 'https://archief-media.viaa.be/viaa/TESTBEELD/c44b877a9a7d4b1a99c5b8b676c3aef4ca370f2fe15d42d49b438e71eea6b99d/browse.mp4',
							title: 'Journaal',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-journaal.jpg',
							cuepoints: [{ startTime: 15, endTime: 17 }],
						},
						{
							src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
							title: 'Elephant dream',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-elephants-dream.jpg',
							cuepoints: [{ startTime: 20, endTime: 25 }],
						},
						{
							src: '//edge.flowplayer.org/bauhaus.mp4',
							title: 'Bauhaus 2',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-bauhaus.jpg',
							cuepoints: [{ startTime: 25, endTime: 29 }],
						},
						{
							src: '//edge.flowplayer.org/functional.mp4',
							title: 'Functional 2',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-functional.jpg',
							cuepoints: [{ startTime: 12, endTime: 14 }],
						},
						{
							src: 'https://archief-media.viaa.be/viaa/TESTBEELD/c44b877a9a7d4b1a99c5b8b676c3aef4ca370f2fe15d42d49b438e71eea6b99d/browse.mp4',
							title: 'Journaal 2',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-journaal.jpg',
							cuepoints: [{ startTime: 5, endTime: 25 }],
						},
						{
							src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
							title: 'Elephant dream 2',
							category: 'video',
							provider: 'VRT',
							poster: 'http://localhost:3020/images/flowplayer-elephants-dream.jpg',
							cuepoints: [{ startTime: 0, endTime: 10 }],
						},
					],
				}}
			/>
		</div>
	))
	.add('FlowPlayer events', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				onPlay={action('play')}
				onPause={action('pause')}
				onEnded={action('ended')}
				onTimeUpdate={action('timeupdate')}
			/>
		</div>
	))
	.add('FlowPlayer Subtitles', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				src="https://archief-media.viaa.be/viaa/TESTBEELD/d97b24406291480aac11d0728335afe011f3d283abde48649a4c4e9079428b8a/browse.mp4"
				subtitles={[
					{
						crossorigin: 'anonymous',
						default: true,
						kind: 'subtitles',
						lang: 'nl',
						id: '123',
						label: 'Nederlands',
						src: 'http://localhost:3000/subtitles/convert-srt-to-vtt/viaa/MOB/TESTBEELD/3b61046461be4b1e9f0fad19b42baa192487807cfefa4c289c0fa65d5c78195b/3b61046461be4b1e9f0fad19b42baa192487807cfefa4c289c0fa65d5c78195b.srt',
					},
				]}
			/>
		</div>
	))
	.add('FlowPlayer in a modal', () => (
		<div className="o-grid-col-bp3-7">
			<Modal isOpen size="medium">
				<ModalBody>
					<FlowPlayer
						{...MOCK_FLOW_PLAYER_PROPS_FULL}
						src="https://archief-media.viaa.be/viaa/TESTBEELD/d97b24406291480aac11d0728335afe011f3d283abde48649a4c4e9079428b8a/browse.mp4"
					/>
				</ModalBody>
			</Modal>
		</div>
	));
