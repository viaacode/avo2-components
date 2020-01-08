import { action } from '../../helpers/action';

export const BUTTONS_MOCK = [
	{
		label: 'Knop 1',
		onClick: action('Button 1 clicked'),
	},
	{
		label: 'Knop 2',
		onClick: action('Button 2 clicked'),
	},
];
