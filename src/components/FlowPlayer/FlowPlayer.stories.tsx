import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../Modal/Modal.slots';

import { FlowPlayer } from './FlowPlayer';
import { MOCK_FLOW_PLAYER_PROPS_FULL } from './FlowPlayer.mock';

const FlowPlayerStoryComponent = ({ children }: { children: ReactElement }) => {
	const [seekTime, setSeekTime] = useState(0);

	return (
		<>
			{cloneElement(children, {
				seekTime,
			})}
			<br />
			<ButtonToolbar>
				{[0, 0.001, 10, 20, 30].map((s) => (
					<Button
						label={`${s} seconds`}
						onClick={() => setSeekTime(s)}
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
							cuepoints: [{ startTime: 15, endTime: 20 }],
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
	.add('FlowPlayer playlist real data', () => (
		<div className="o-grid-col-bp3-7">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				plugins={['cuepoints', 'hls', 'keyboard', 'playlist']}
				src={{
					type: 'flowplayer/playlist',
					items: [
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/1450c0345a9b4230804e48039f66232a7784c27cc3de49aba7d8bcb29e986036/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvMTQ1MGMwMzQ1YTliNDIzMDgwNGU0ODAzOWY2NjIzMmE3Nzg0YzI3Y2MzZGU0OWFiYTdkOGJjYjI5ZTk4NjAzNi9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.Ns3REYp63VAB4zG5BZ6RS5gln6inerR7g2Q6dt4K7U4',
							title: '1. KLAAR: Amazonebranden',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/1450c0345a9b4230804e48039f66232a7784c27cc3de49aba7d8bcb29e986036/keyframes/1450c0345a9b4230804e48039f66232a7784c27cc3de49aba7d8bcb29e986036e7cf1174bf7d4c39bb9067100e5da9a3.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/c685479fbe3d4037a95a2023d96a3640831d56d0fd5c4f37a792539eab29bb8c/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvYzY4NTQ3OWZiZTNkNDAzN2E5NWEyMDIzZDk2YTM2NDA4MzFkNTZkMGZkNWM0ZjM3YTc5MjUzOWVhYjI5YmI4Yy9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.LPxtlxEIst1Mh4jrRy9vMYjG7i6fg6XOdj8fX_-hAkk',
							title: '2. Biodiversiteit in het Amazonewoud',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/c685479fbe3d4037a95a2023d96a3640831d56d0fd5c4f37a792539eab29bb8c/keyframes/c685479fbe3d4037a95a2023d96a3640831d56d0fd5c4f37a792539eab29bb8c83f75711012a47cbb7742f699a0b15a6.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/876e11b7aee44dc283f53e0fb3bb1dadab69286a85f443729dd3368e9a58885e/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvODc2ZTExYjdhZWU0NGRjMjgzZjUzZTBmYjNiYjFkYWRhYjY5Mjg2YTg1ZjQ0MzcyOWRkMzM2OGU5YTU4ODg1ZS9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.APOtJFzWoUK5bctRtyWkGslEwoewCuFSe0iQJOu1iPQ',
							title: '3. Een indianenstam in het Braziliaanse regenwoud',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/876e11b7aee44dc283f53e0fb3bb1dadab69286a85f443729dd3368e9a58885e/keyframes/876e11b7aee44dc283f53e0fb3bb1dadab69286a85f443729dd3368e9a58885e20db059c976a48afa1d147b5428ccb31.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/6e4181e44e3241148ea8bf0afbb823246c7b483c48464933bdd4ad78290c57de/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvNmU0MTgxZTQ0ZTMyNDExNDhlYThiZjBhZmJiODIzMjQ2YzdiNDgzYzQ4NDY0OTMzYmRkNGFkNzgyOTBjNTdkZS9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.8T9fYfYJQj184-LqyS7O7nw8ummIP_3SsOkbt-Hh7ds',
							title: '4. Economie versus ecologie ',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/6e4181e44e3241148ea8bf0afbb823246c7b483c48464933bdd4ad78290c57de/keyframes/keyframes_1_1/keyframe1.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/c685479fbe3d4037a95a2023d96a3640831d56d0fd5c4f37a792539eab29bb8c/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvYzY4NTQ3OWZiZTNkNDAzN2E5NWEyMDIzZDk2YTM2NDA4MzFkNTZkMGZkNWM0ZjM3YTc5MjUzOWVhYjI5YmI4Yy9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.LPxtlxEIst1Mh4jrRy9vMYjG7i6fg6XOdj8fX_-hAkk',
							title: '5. De airconditioning van de planeet ',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/c685479fbe3d4037a95a2023d96a3640831d56d0fd5c4f37a792539eab29bb8c/keyframes/c685479fbe3d4037a95a2023d96a3640831d56d0fd5c4f37a792539eab29bb8c83f75711012a47cbb7742f699a0b15a6.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/b79888c4fd2a46dbac732baa2eadd16fe3b4b172cef5478db5c35de6e4810c64/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvYjc5ODg4YzRmZDJhNDZkYmFjNzMyYmFhMmVhZGQxNmZlM2I0YjE3MmNlZjU0NzhkYjVjMzVkZTZlNDgxMGM2NC9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.l7EZX8Bl1aX6ScllT2YMSSxxNW8Jq8ELyMFexSRr9xI',
							title: '6. Het Amazonewoud wordt bedreigd',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/b79888c4fd2a46dbac732baa2eadd16fe3b4b172cef5478db5c35de6e4810c64/keyframes/b79888c4fd2a46dbac732baa2eadd16fe3b4b172cef5478db5c35de6e4810c649f95ee73cf044ff6a670a8612e69edf8.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/9a065d969c7443c99ad4573c7f817ff55f7476dae0a74e67b3f9defb373e7714/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvOWEwNjVkOTY5Yzc0NDNjOTlhZDQ1NzNjN2Y4MTdmZjU1Zjc0NzZkYWUwYTc0ZTY3YjNmOWRlZmIzNzNlNzcxNC9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.YCAuETqt0mGFCPaMmldIiVex7ylqh_DG84Ymj7mWjGE',
							title: '7. Bolsonaro wordt president van Brazilië',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/9a065d969c7443c99ad4573c7f817ff55f7476dae0a74e67b3f9defb373e7714/keyframes/keyframes_1_1/keyframe7.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/2c0f57ea3eae4c839a70b107aaca6590852f9d8098de429b9214fb189ef5b8b4/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvMmMwZjU3ZWEzZWFlNGM4MzlhNzBiMTA3YWFjYTY1OTA4NTJmOWQ4MDk4ZGU0MjliOTIxNGZiMTg5ZWY1YjhiNC9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.t1rh5nZP0Tsfbt30Sk0vaM8ao5U4122L74IRiMu74pk',
							title: '8. Handelsakkoord tussen de Europese Unie en Mercosur',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/2c0f57ea3eae4c839a70b107aaca6590852f9d8098de429b9214fb189ef5b8b4/keyframes/2c0f57ea3eae4c839a70b107aaca6590852f9d8098de429b9214fb189ef5b8b4e30f43771ff04eef8fc7069f8437f5fa.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/d48bb2c94b294b4488d6a30c5c634271cf85bafc8fda4120887c02e4438805ab/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvZDQ4YmIyYzk0YjI5NGI0NDg4ZDZhMzBjNWM2MzQyNzFjZjg1YmFmYzhmZGE0MTIwODg3YzAyZTQ0Mzg4MDVhYi9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.K89yqL6JNdwP6r-foMiO6_0YzBrHLzrQRHXaBo6Pozg',
							title: '9. Het Amazonewoud in lichterlaaie',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/d48bb2c94b294b4488d6a30c5c634271cf85bafc8fda4120887c02e4438805ab/keyframes/d48bb2c94b294b4488d6a30c5c634271cf85bafc8fda4120887c02e4438805aba7b20895212b450baa10272b44871c87.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/3247341a25784c98b69bbfe092dea452e5d781b2cd7d4c4295e46a09261820cb/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA3LCJzdWIiOiJURVNUQkVFTEQvMzI0NzM0MWEyNTc4NGM5OGI2OWJiZmUwOTJkZWE0NTJlNWQ3ODFiMmNkN2Q0YzQyOTVlNDZhMDkyNjE4MjBjYi9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.tCLrFCckq7SsvIUZTQXdlfYMoAaRU6URa8Ek3gFc0_Q',
							title: '10. Wereldwijde discussie over de bosbranden',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/3247341a25784c98b69bbfe092dea452e5d781b2cd7d4c4295e46a09261820cb/keyframes/3247341a25784c98b69bbfe092dea452e5d781b2cd7d4c4295e46a09261820cb1748f3c86dfc41e2aec57c431cba0758.jpg',
							category: 'video',
							provider: 'VRT',
						},
						{
							src: 'https://media.viaa.be/play/v2/TESTBEELD/6cc526697f804ab2808d50826dbf7d1085722db7bfd84d3888827c2d12d76d80/browse.mp4?token=eyJraWQiOiIwMDAyIiwiYWxnIjoiSFMyNTYifQ.eyJhdWQiOiJPUi1hdm8yIiwiZXhwIjoxNjYxNDM0NTA4LCJzdWIiOiJURVNUQkVFTEQvNmNjNTI2Njk3ZjgwNGFiMjgwOGQ1MDgyNmRiZjdkMTA4NTcyMmRiN2JmZDg0ZDM4ODg4MjdjMmQxMmQ3NmQ4MC9icm93c2UubXA0IiwiaXAiOiI5NC4xNDMuMTg5LjI0MSIsInJlZmVyZXIiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvIiwiZnJhZ21lbnQiOltdfQ.LVgrGBxVsXGnMc-MyF9jFeWX4MlHh_-jlub0BTvbGDI',
							title: '11. Amazonetop over bosbranden',
							poster: 'https://archief-media.viaa.be/viaa/TESTBEELD/6cc526697f804ab2808d50826dbf7d1085722db7bfd84d3888827c2d12d76d80/keyframes/6cc526697f804ab2808d50826dbf7d1085722db7bfd84d3888827c2d12d76d80fd86b23fe765426ca8a3cc4e0efbe616.jpg',
							category: 'video',
							provider: 'VRT',
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
