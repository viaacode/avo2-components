import React, { cloneElement, ReactElement } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';

import { Select } from './Select';
import { SELECT_MOCK_OPTIONS } from './Select.mock';

const SelectStoryComponent = ({ children }: { children: ReactElement }) => {
	return cloneElement(children, {
		value: null,
		onChange: (value: string) => {
			action('selection changed: ')(value);
		},
	});
};

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
	))
	.add('Select reset after select option', () => (
		<SelectStoryComponent>
			<Select
				options={SELECT_MOCK_OPTIONS}
				placeholder="select a value"
				onChange={action('onChange')}
				value={null}
			/>
		</SelectStoryComponent>
	));
