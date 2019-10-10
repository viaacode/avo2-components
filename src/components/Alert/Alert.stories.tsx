import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers/action';
import { Alert } from './Alert';

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => (
		<React.Fragment>
			<div className="u-spacer-bottom">
				<Alert message="Info alert message" onClose={action('alert closed')} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Success alert message" type="success" />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Danger alert message" type="danger" />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Loading alert message" type="spinner" />
			</div>
		</React.Fragment>
	))
	.add('Dark alerts', () => (
		<React.Fragment>
			<div className="u-spacer-bottom">
				<Alert message="Info alert message" dark={true} onClose={action('alert closed')} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Success alert message" type="success" dark={true} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Danger alert message" type="danger" dark={true} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Loading alert message" type="spinner" dark={true} />
			</div>
		</React.Fragment>
	))
	.add('Alerts html multi line', () => (
		<Alert
			message={'Info alert message<br/>Info alert message<br/>Info alert message'}
			onClose={action('alert closed')}
		/>
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
