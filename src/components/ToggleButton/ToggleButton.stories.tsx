import { action } from 'storybook/actions';

import { IconNameSchema } from '../Icon/Icon.types';

import { ToggleButton } from './ToggleButton';

export default {
	title: 'components/ToggleButton',

	parameters: {
		jest: ['ToggleButton'],
	},
};

export const _ToggleButton = () => (
	<ToggleButton
		icon={IconNameSchema.heart}
		active={false}
		onClick={action('onClick')}
		ariaLabel="toggle favorite"
		title="toggle favorite"
	/>
);

_ToggleButton.story = {
	name: 'ToggleButton',
};

export const ToggleButtonActive = () => (
	<ToggleButton
		icon={IconNameSchema.bookmark}
		active={true}
		onClick={action('onClick')}
		ariaLabel="toggle bookmark"
	/>
);

ToggleButtonActive.story = {
	name: 'ToggleButton active',
};
