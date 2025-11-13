import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';

import { Toggle } from './Toggle';

const ToggleStoryComponent = ({
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
			action('Toggle toggled')(c);
			setChecked(c);
		},
	});
};

const meta: Meta<typeof Toggle> = {
	title: 'components/Toggle',
	component: Toggle,
	parameters: { jest: ['Toggle'] },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const ToggleStory: Story = {
	render: () => (
		<ToggleStoryComponent>
			<Toggle />
		</ToggleStoryComponent>
	),
};
export const ToggleDefaultChecked: Story = {
	render: () => (
		<ToggleStoryComponent defaultChecked={true}>
			<Toggle />
		</ToggleStoryComponent>
	),
};
