import React, { Children, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { RadioButton, RadioButtonProps } from '../RadioButton/RadioButton';
import { RadioButtonGroup } from './RadioButtonGroup';

const RadioButtonGroupStoryComponent = ({
	children,
	defaultValue,
}: {
	children: ReactElement[];
	defaultValue?: string;
}) => {
	const [value, setValue] = useState(defaultValue);

	return (
		<Fragment>
			{Children.map(children, (checkbox: ReactElement<RadioButtonProps>) =>
				React.cloneElement(checkbox, {
					checked: checkbox.props.value === value,
					onChange: (checked: boolean) => {
						action('RadioButton toggled')(checkbox.props.value, checked);
						setValue(checkbox.props.value);
					},
				})
			)}
		</Fragment>
	);
};

storiesOf('components/RadioButtonGroup', module)
	.addParameters({ jest: ['RadioButtonGroup'] })
	.add('RadioButtonGroup', () => (
		<RadioButtonGroup>
			<RadioButtonGroupStoryComponent defaultValue="fish">
				<RadioButton name="List1" label="Fish" value="fish" onChange={action('onChange fish')} />
				<RadioButton name="List1" label="Steak" value="steak" onChange={action('onChange steak')} />
				<RadioButton name="List1" label="Bacon" value="bacon" onChange={action('onChange bacon')} />
			</RadioButtonGroupStoryComponent>
		</RadioButtonGroup>
	))
	.add('RadioButtonGroup inline', () => (
		<RadioButtonGroup inline>
			<RadioButtonGroupStoryComponent defaultValue="fish">
				<RadioButton name="List1" label="Fish" value="fish" />
				<RadioButton name="List1" label="Steak" value="steak" />
				<RadioButton name="List1" label="Bacon" value="bacon" />
			</RadioButtonGroupStoryComponent>
		</RadioButtonGroup>
	));
