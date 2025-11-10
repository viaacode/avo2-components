import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, Fragment, type ReactElement, useState } from 'react';

import { FileInput } from './FileInput.js';

const meta: Meta<typeof FileInput> = {
	title: 'components/FileInput',
	component: FileInput,
	parameters: {
		jest: ['FileInput'],
	},
};
export default meta;

type Story = StoryObj<typeof FileInput>;

const FileInputStoryComponent = ({
	children,
	defaultValue = '',
}: {
	children: ReactElement;
	defaultValue?: string;
}) => {
	const [value, setValue] = useState(defaultValue);

	return cloneElement(children, {
		value,
		onChange: (value: string) => {
			console.log('Input changed', value);
			setValue(value);
		},
	});
};

export const Default: Story = {
	render: () => (
		<FileInputStoryComponent>
			<FileInput placeholder="Profielfoto uploaden" />
		</FileInputStoryComponent>
	),
};

export const Disabled: Story = {
	render: () => (
		<FileInputStoryComponent>
			<FileInput disabled placeholder="Profielfoto uploaden" />
		</FileInputStoryComponent>
	),
};

export const WithoutPlaceholder: Story = {
	render: () => (
		<Fragment>
			<FileInputStoryComponent>
				<FileInput />
			</FileInputStoryComponent>
		</Fragment>
	),
};
