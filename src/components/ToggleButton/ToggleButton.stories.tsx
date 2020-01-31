import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';

import { ToggleButton } from './ToggleButton';

storiesOf('ToggleButton', module)
	.addParameters({ jest: ['ToggleButton'] })
	.add('ToggleButton', () => (
		<ToggleButton
			icon="heart"
			active={false}
			onClick={action('onClick')}
			ariaLabel="toggle favorite"
			title="toggle favorite"
		/>
	))
	.add('ToggleButton active', () => (
		<ToggleButton
			icon="bookmark"
			active={true}
			onClick={action('onClick')}
			ariaLabel="toggle bookmark"
		/>
	));
