import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';

import { Checkbox } from './Checkbox.js';

const CheckboxStoryComponent = ({
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
			action('Checkbox toggled')(checked);
			setChecked(checked);
		},
	});
};

storiesOf('components/Checkbox', module)
	.addParameters({ jest: ['Checkbox'] })
	.add('Checkbox', () => (
		<CheckboxStoryComponent>
			<Checkbox label="One" />
		</CheckboxStoryComponent>
	))
	.add('Checkbox default checked', () => (
		<CheckboxStoryComponent defaultChecked={true}>
			<Checkbox label="One" />
		</CheckboxStoryComponent>
	))
	.add('Checkbox default unchecked', () => (
		<CheckboxStoryComponent defaultChecked={false}>
			<Checkbox label="One" />
		</CheckboxStoryComponent>
	));
