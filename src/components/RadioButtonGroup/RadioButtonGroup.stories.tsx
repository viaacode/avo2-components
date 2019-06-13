import React from 'react';

import { storiesOf } from '@storybook/react';

import { RadioButton } from '../..';
import { RadioButtonGroup } from './RadioButtonGroup';

storiesOf('RadioButtonGroup', module)
	.addParameters({ jest: ['RadioButtonGroup'] })
	.add('RadioButtonGroup', () => (
		<RadioButtonGroup>
			<RadioButton name="List1" label="Fish" />
			<RadioButton name="List1" label="Steak" />
			<RadioButton name="List1" label="Bacon" />
		</RadioButtonGroup>
	))
	.add('RadioButtonGroup inline', () => (
		<RadioButtonGroup inline>
			<RadioButton name="List1" label="Fish" />
			<RadioButton name="List1" label="Steak" />
			<RadioButton name="List1" label="Bacon" />
		</RadioButtonGroup>
	));
