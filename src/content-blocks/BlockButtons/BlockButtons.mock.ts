import { action } from '../../helpers';

import { ButtonProps } from '../../components/Button/Button';

export const BUTTONS_MOCK: ButtonProps[] = [
	{
		label: 'Knop 1',
		onClick: action('Button 1 clicked'),
	},
	{
		label: 'Knop 2',
		onClick: action('Button 2 clicked'),
	},
];
