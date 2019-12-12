import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers/action';
import { Spacer } from '../Spacer/Spacer';
import { Alert } from './Alert';
import { AlertProps, AlertType } from './Alert.types';

function getMultiLineAlertMessage(type: string) {
	return (
		<>
			{type} alert message
			<br />
			{type} alert message
			<br />
			{type} alert message
			<br />
		</>
	);
}

function renderAlertStories(props?: AlertProps, message?: (type: string) => JSX.Element) {
	const types: (keyof typeof AlertType)[] = ['Info', 'Success', 'Danger', 'Spinner'];

	return (
		<>
			{types.map((type, i) => (
				<Spacer margin="bottom">
					<Alert
						key={`${type}-${i}`}
						{...props}
						message={message ? message(type) : `${type} alert message`}
						type={AlertType[type]}
						onClose={type === 'Info' ? action('alert closed') : () => {}}
					/>
				</Spacer>
			))}
		</>
	);
}

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => renderAlertStories())
	.add('Alerts multiline', () => renderAlertStories({}, getMultiLineAlertMessage))
	.add('Dark alerts', () => renderAlertStories({ dark: true }))
	.add('Light alerts', () => renderAlertStories({ light: true }))
	.add('Alerts custom content', () => (
		<Alert>
			<span>
				Info alert message <a href="#alert">with link</a>
			</span>
		</Alert>
	));
