import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';

import { RadioButton } from './RadioButton.js';

const RadioButtonStoryComponent = ({
	children,
	defaultChecked,
}: {
	children: ReactElement;
	defaultChecked?: boolean;
}) => {
	const [checked, setChecked] = useState(defaultChecked);

	return cloneElement(children, {
		checked,
		onChange: (c: boolean) => {
			action('RadioButton toggled')(c);
			setChecked(c);
		},
	});
};

const meta: Meta<typeof RadioButton> = {
	title: 'components/RadioButton',
	component: RadioButton,
	parameters: { jest: ['RadioButton'] },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const RadioButtonStory: Story = {
	render: () => (
		<RadioButtonStoryComponent>
			<RadioButton
				name="List1"
				label="One"
				value="One"
				onChange={action('Radio button selected')}
			/>
		</RadioButtonStoryComponent>
	),
};
export const RadioButtonDefaultChecked: Story = {
	render: () => (
		<RadioButtonStoryComponent defaultChecked={true}>
			<RadioButton
				name="List2"
				label="One"
				value="One"
				onChange={action('Radio button selected')}
			/>
		</RadioButtonStoryComponent>
	),
};
