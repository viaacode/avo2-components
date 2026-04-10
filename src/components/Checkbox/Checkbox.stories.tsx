import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';

import { Checkbox } from './Checkbox';
type Props = {
	checked: boolean;
	onChange: (checked: boolean) => void;
};
const CheckboxStoryComponent = ({
	children,
	defaultChecked,
}: {
	children: ReactElement;
	defaultChecked?: boolean;
}) => {
	const [checked, setChecked] = useState(defaultChecked);

	return cloneElement(children as ReactElement<Props>, {
		checked,
		onChange: (c: boolean) => {
			action('Checkbox toggled')(c);
			setChecked(c);
		},
	});
};

const meta: Meta<typeof Checkbox> = {
	title: 'components/Checkbox',
	component: Checkbox,
	parameters: { jest: ['Checkbox'] },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const CheckboxStory: Story = {
	render: () => (
		<CheckboxStoryComponent>
			<Checkbox label="One" />
		</CheckboxStoryComponent>
	),
};
export const CheckboxDefaultChecked: Story = {
	render: () => (
		<CheckboxStoryComponent defaultChecked={true}>
			<Checkbox label="One" />
		</CheckboxStoryComponent>
	),
};
export const CheckboxDefaultUnchecked: Story = {
	render: () => (
		<CheckboxStoryComponent defaultChecked={false}>
			<Checkbox label="One" />
		</CheckboxStoryComponent>
	),
};
