import { ButtonAction } from '../../types';

import { ImageInfo } from './BlockProjectsSpotlight';

const MOCK_BUTTON_ACTION: ButtonAction = {
	type: 'EXTERNAL_LINK',
	value: 'http://google.com',
};

export const MOCK_SPOTLIGHT_PROJECTS: ImageInfo[] = [
	{
		image: '/images/500x200.svg',
		title: 'My project',
		buttonAction: MOCK_BUTTON_ACTION,
	},
	{
		image: '/images/500x200.svg',
		title: 'My project 2',
		buttonAction: MOCK_BUTTON_ACTION,
	},
	{
		image: '/images/500x200.svg',
		title: 'My project 3',
		buttonAction: MOCK_BUTTON_ACTION,
	},
];
