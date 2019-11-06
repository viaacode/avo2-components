import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers/action';
import { Spacer } from '../Spacer/Spacer';
import { Alert } from './Alert';

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => (
		<>
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
		</>
	))
	.add('Dark alerts', () => (
		<>
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
		</>
	))
	.add('Alerts custom content', () => (
		<Alert>
			<span>
				Info alert message <a href="#alert">with link</a>
			</span>
		</Alert>
	))
	.add('Alerts with html', () => (
		<Alert message="Dit is een lange zin en nu volgt er een br-tag.<br />Wat een tag." />
	));
