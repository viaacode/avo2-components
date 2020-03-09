import { action } from '../../helpers';
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
		navigate: action('Clicked on My project'),
	},
	{
		image: '/images/500x200.svg',
		title: 'My project 2',
		buttonAction: MOCK_BUTTON_ACTION,
		navigate: action('Clicked on My project 2'),
	},
	{
		image: '/images/500x200.svg',
		title: 'My project 3',
		buttonAction: undefined,
		navigate: action('Clicked on My project 3'),
	},
];
