import { action } from '../../helpers';

import { ButtonProps } from './BlockButtons';

export const BUTTONS_MOCK: ButtonProps[] = [
	{
		label: 'Knop 1',
		navigate: action('Knop 1'),
	},
	{
		label: 'Knop 2',
		navigate: action('Knop 2'),
	},
];
