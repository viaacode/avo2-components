import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers/action';
import { Spacer } from '../Spacer/Spacer';
import { Alert } from './Alert';

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

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => (
		<React.Fragment>
			<Spacer margin="bottom">
				<Alert message="Info alert message" onClose={action('alert closed')} />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message="Success alert message" type="success" />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message="Danger alert message" type="danger" />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message="Loading alert message" type="spinner" />
			</Spacer>
		</React.Fragment>
	))
	.add('Alerts multiline', () => (
		<React.Fragment>
			<Spacer margin="bottom">
				<Alert message={getMultiLineAlertMessage('Info')} onClose={action('alert closed')} />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message={getMultiLineAlertMessage('Success')} type="success" />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message={getMultiLineAlertMessage('Danger')} type="danger" />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message={getMultiLineAlertMessage('Spinner')} type="spinner" />
			</Spacer>
		</React.Fragment>
	))
	.add('Dark alerts', () => (
		<React.Fragment>
			<Spacer margin="bottom">
				<Alert message="Info alert message" dark={true} onClose={action('alert closed')} />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message="Success alert message" type="success" dark={true} />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message="Danger alert message" type="danger" dark={true} />
			</Spacer>
			<Spacer margin="bottom">
				<Alert message="Loading alert message" type="spinner" dark={true} />
			</Spacer>
		</React.Fragment>
	))
	.add('Alerts custom content', () => (
		<React.Fragment>
			<Alert>
				<span>
					Info alert message <a href="#alert">with link</a>
				</span>
			</Alert>
		</React.Fragment>
	));
