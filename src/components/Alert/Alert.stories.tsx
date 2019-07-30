import { storiesOf } from '@storybook/react';
import React from 'react';

import { Alert } from './Alert';

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => (
		<React.Fragment>
			<div className="u-spacer-bottom">
				<Alert message="Info alert message" close={() => {}} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Success alert message" type="success" close={() => {}} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Danger alert message" type="danger" close={() => {}} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Loading alert message" type="spinner" close={() => {}} />
			</div>
		</React.Fragment>
	))
	.add('Dark alerts', () => (
		<React.Fragment>
			<div className="u-spacer-bottom">
				<Alert message="Info alert message" dark={true} close={() => {}} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Success alert message" type="success" dark={true} close={() => {}} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Danger alert message" type="danger" dark={true} close={() => {}} />
			</div>
			<div className="u-spacer-bottom">
				<Alert message="Loading alert message" type="spinner" dark={true} close={() => {}} />
			</div>
		</React.Fragment>
	));
