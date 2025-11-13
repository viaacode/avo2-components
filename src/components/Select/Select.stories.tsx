import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';

import { Select } from './Select';
import { SELECT_MOCK_OPTIONS } from './Select.mock';

const meta: Meta<typeof Select> = {
	title: 'components/Select',
	component: Select,
	parameters: {
		jest: ['Select'],
	},
};
export default meta;

type Story = StoryObj<typeof Select>;

const SelectStoryComponent = ({ children }: { children: ReactElement }) => {
	const [value, setValue] = useState<string | null>('Al');

	return cloneElement(children, {
		value,
		onChange: (value: string | null) => {
			setValue(value);
			console.log('selection changed: ', value);
		},
	});
};

export const Default: Story = {
	args: {
		options: SELECT_MOCK_OPTIONS,
		value: 'Db',
		onChange: console.log,
	},
};

export const Disabled: Story = {
	args: {
		options: SELECT_MOCK_OPTIONS,
		value: 'Db',
		onChange: console.log,
		disabled: true,
	},
};

export const Clearable: Story = {
	render: () => (
		<SelectStoryComponent>
			<Select options={SELECT_MOCK_OPTIONS} value="Db" onChange={console.log} clearable />
		</SelectStoryComponent>
	),
};

export const Loading: Story = {
	args: {
		options: SELECT_MOCK_OPTIONS,
		value: 'Db',
		onChange: console.log,
		loading: true,
	},
};

export const ResetAfterSelect: Story = {
	render: () => (
		<SelectStoryComponent>
			<Select
				options={SELECT_MOCK_OPTIONS}
				placeholder="select a value"
				onChange={console.log}
				value={null}
			/>
		</SelectStoryComponent>
	),
};
