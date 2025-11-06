import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

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
		onChange: (checked: boolean) => {
			action('RadioButton toggled')(checked);
			setChecked(checked);
		},
	});
};

storiesOf('components/RadioButton', module)
	.addParameters({ jest: ['RadioButton'] })
	.add('Radio Button', () => (
		<RadioButtonStoryComponent>
			<RadioButton
				name="List1"
				label="One"
				value="One"
				onChange={action('Radio button selected')}
			/>
		</RadioButtonStoryComponent>
	))
	.add('Radio Button default checked', () => (
		<RadioButtonStoryComponent defaultChecked={true}>
			<RadioButton
				name="List2"
				label="One"
				value="One"
				onChange={action('Radio button selected')}
			/>
		</RadioButtonStoryComponent>
	));
