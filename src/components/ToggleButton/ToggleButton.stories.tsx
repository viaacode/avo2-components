import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { IconNameSchema } from '../Icon/Icon.types';

import { ToggleButton } from './ToggleButton';

storiesOf('components/ToggleButton', module)
	.addParameters({ jest: ['ToggleButton'] })
	.add('ToggleButton', () => (
		<ToggleButton
			icon={IconNameSchema.heart}
			active={false}
			onClick={action('onClick')}
			ariaLabel="toggle favorite"
			title="toggle favorite"
		/>
	))
	.add('ToggleButton active', () => (
		<ToggleButton
			icon={IconNameSchema.bookmark}
			active={true}
			onClick={action('onClick')}
			ariaLabel="toggle bookmark"
		/>
	));
