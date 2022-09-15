import image500x200 from '../../../static/images/500x200.jpg';
import { ButtonAction } from '../../types';

import { ImageInfo } from './BlockSpotlight';

const MOCK_BUTTON_ACTION: ButtonAction = {
	type: 'EXTERNAL_LINK',
	value: 'http://google.com',
};

export const MOCK_SPOTLIGHT_PROJECTS: ImageInfo[] = [
	{
		image: image500x200,
		title: 'Big item',
		buttonAction: MOCK_BUTTON_ACTION,
	},
	{
		image: image500x200,
		title: 'Small item',
		buttonAction: MOCK_BUTTON_ACTION,
	},
	{
		image: image500x200,
		title: 'Small item bis',
		buttonAction: undefined,
	},
];
