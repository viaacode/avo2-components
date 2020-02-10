import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';

import { Select } from './Select';
import { SELECT_MOCK_OPTIONS } from './Select.mock';

storiesOf('components/Select', module)
	.addParameters({ jest: ['Select'] })
	.add('Select', () => (
		<Select options={SELECT_MOCK_OPTIONS} value="Db" onChange={action('onChange')} />
	))
	.add('Select disabled', () => (
		<Select options={SELECT_MOCK_OPTIONS} value="Db" onChange={action('onChange')} disabled />
	))
	.add('Select clearable', () => (
		<Select options={SELECT_MOCK_OPTIONS} value="Db" onChange={action('onChange')} clearable />
	))
	.add('Select loading', () => (
		<Select options={SELECT_MOCK_OPTIONS} value="Db" onChange={action('onChange')} loading />
	));
