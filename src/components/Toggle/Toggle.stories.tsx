import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

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
		onChange: (checked: boolean) => {
			action('Toggle toggled')(checked);
			setChecked(checked);
		},
	});
};

storiesOf('Toggle', module)
	.addParameters({ jest: ['Toggle'] })
	.add('Toggle', () => (
		<ToggleStoryComponent>
			<Toggle />
		</ToggleStoryComponent>
	))
	.add('Toggle default checked', () => (
		<ToggleStoryComponent defaultChecked={true}>
			<Toggle />
		</ToggleStoryComponent>
	));
