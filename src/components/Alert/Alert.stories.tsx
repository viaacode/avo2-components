import { storiesOf } from '@storybook/react';
import React from 'react';

import { Alert } from './Alert';

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => (
		<Alert
			id="1"
			message="Alert message"
			options={{ type: 'info', dark: false }}
			close={() => {}}
		/>
	));
