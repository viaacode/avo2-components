import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../Button/Button';
import { ButtonToolbar } from './ButtonToolbar';

storiesOf('ButtonToolbar', module)
	.addParameters({ jest: ['ButtonToolbar'] })
	.add('ButtonToolbar 5 buttons', () => (
		<ButtonToolbar>
			<Button type="secondary" label="Test Button One" />
			<Button type="secondary" label="Test Button Two" />
			<Button type="secondary" label="Test Button Three" />
			<Button type="secondary" label="Test Button Four" />
			<Button type="secondary" label="Test Button Five" />
		</ButtonToolbar>
	))
	.add('ButtonToolbar 2 buttons', () => (
		<ButtonToolbar>
			<Button type="secondary" label="Test Button One" />
			<Button type="secondary" label="Test Button Two" />
		</ButtonToolbar>
	))
	.add('ButtonToolbar 1 buttons', () => (
		<ButtonToolbar>
			<Button type="secondary" label="Test Button One" />
		</ButtonToolbar>
	));