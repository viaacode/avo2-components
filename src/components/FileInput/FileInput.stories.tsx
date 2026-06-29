import type { Meta, StoryObj } from '@storybook/react';
import { type ChangeEvent, cloneElement, Fragment, type ReactElement, useState } from 'react';

import { FileInput, type FileInputProps } from './FileInput';

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
	const [, setValue] = useState(defaultValue);

	return cloneElement(children as ReactElement<FileInputProps>, {
		onChange: (evt: ChangeEvent<HTMLInputElement>) => {
			console.log('Input changed', evt.target.value);
			setValue(evt.target.value);
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
