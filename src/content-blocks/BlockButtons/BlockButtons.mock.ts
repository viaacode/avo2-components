import { action } from '../../helpers';
import { ButtonAction } from '../../types';

import { ButtonProps } from './BlockButtons';

export const BUTTONS_MOCK: ButtonProps[] = [
	{
		label: 'Knop 1',
		action: {
			type: 'INTERNAL_LINK',
			value: '/hulp',
		},
	},
	{
		label: 'Knop 2',
		action: {
			type: 'INTERNAL_LINK',
			value: '/hulp',
		},
	},
];

export const BUTTONS_BUILD_NAVIGATE = (buttonAction: ButtonAction) =>
	action(buttonAction.value.toString());
