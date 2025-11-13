import type { Meta, StoryObj } from '@storybook/react';
import React, { Fragment, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';
import { noop } from '../../helpers/noop';
import { RadioButtonGroup } from './RadioButtonGroup';
import { RADIO_BUTTON_OPTIONS } from './RadioButtonGroup.mock';

const RadioButtonGroupStoryComponent = ({
	children,
	defaultValue,
}: {
	children: ReactElement;
	defaultValue?: string;
}) => {
	const [value, setValue] = useState(defaultValue);

	return (
		<Fragment>
			{React.cloneElement(children, {
				value,
				onChange: (v: string) => {
					action('RadioButtonGroup value changed')(v);
					setValue(v);
				},
			})}
		</Fragment>
	);
};

const meta: Meta<typeof RadioButtonGroup> = {
	title: 'components/RadioButtonGroup',
	component: RadioButtonGroup,
	parameters: { jest: ['RadioButtonGroup'] },
};
export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

export const RadioButtonGroupStory: Story = {
	render: () => (
		<RadioButtonGroupStoryComponent>
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} />
		</RadioButtonGroupStoryComponent>
	),
};
export const RadioButtonGroupDefaultOption: Story = {
	render: () => (
		<RadioButtonGroupStoryComponent defaultValue="steak">
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} />
		</RadioButtonGroupStoryComponent>
	),
};
export const RadioButtonGroupInline: Story = {
	render: () => (
		<RadioButtonGroupStoryComponent>
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} inline />
		</RadioButtonGroupStoryComponent>
	),
};
