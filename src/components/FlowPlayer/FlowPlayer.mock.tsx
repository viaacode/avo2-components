import { FlowPlayerPropsSchema } from './FlowPlayer';

export const MOCK_FLOW_PLAYER_PROPS: FlowPlayerPropsSchema = {
	src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
	title: 'Title',
	autoplay: false,
	onInit: () => {},
};

export const MOCK_FLOW_PLAYER_PROPS_FULL: FlowPlayerPropsSchema = {
	...MOCK_FLOW_PLAYER_PROPS,
	poster: 'https://via.placeholder.com/1920x1080',
	logo: 'https://via.placeholder.com/100x100',
	subtitles: ['30-12-2011', 'VRT'],
};
