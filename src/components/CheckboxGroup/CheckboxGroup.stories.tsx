import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { cloneDeep } from 'lodash-es';
import { CheckboxGroup } from './CheckboxGroup';

export const countOptions = [
	{
		label: 'One',
		id: 'one',
		checked: false,
	},
	{
		label: 'Two',
		id: 'two',
		checked: false,
	},
	{
		label: 'Three',
		id: 'three',
		checked: false,
	},
	{
		label: 'Four',
		id: 'four',
		checked: false,
	},
	{
		label: 'Five',
		id: 'five',
		checked: false,
	},
	{
		label: 'Six',
		id: 'six',
		checked: false,
	},
	{
		label: 'Seven',
		id: 'seven',
		checked: false,
	},
	{
		label: 'Eight',
		id: 'eight',
		checked: false,
	},
	{
		label: 'Nine',
		id: 'nine',
		checked: false,
	},
	{
		label: 'Ten',
		id: 'ten',
		checked: false,
	},
	{
		label: 'Elven',
		id: 'elven',
		checked: false,
	},
	{
		label: 'Twelve',
		id: 'twelve',
		checked: false,
	},
];

const countOptions2 = cloneDeep(countOptions).map((option, index) => {
	option.checked = index % 2 === 0;
	return option;
});

storiesOf('CheckboxGroup', module)
	.addParameters({ jest: ['CheckboxGroup'] })
	.add('CheckboxGroup', () => (
		<CheckboxGroup
			label="Counting1"
			id="counting1"
			options={countOptions.slice(0, 5)}
			onChange={action('CheckboxGroup changed')}
		/>
	))
	.add('CheckboxGroup some checked boxes', () => (
		<CheckboxGroup
			label="Counting2"
			id="counting2"
			options={countOptions2.slice(0, 5)}
			onChange={action('CheckboxGroup2 changed')}
		/>
	))
	.add('CheckboxGroup with more than 10 items', () => (
		<CheckboxGroup
			label="Counting3"
			id="counting3"
			options={countOptions}
			onChange={action('CheckboxGroup3 changed')}
		/>
	))
	.add('CheckboxGroup with more than 6 items', () => (
		<CheckboxGroup
			label="Counting4"
			id="counting4"
			options={countOptions}
			collapsedItemCount={6}
			onChange={action('CheckboxGroup4 changed')}
		/>
	));
