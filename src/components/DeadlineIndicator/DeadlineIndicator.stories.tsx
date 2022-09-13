import { storiesOf } from '@storybook/react';
import React from 'react';

import { DeadlineIndicator } from './DeadlineIndicator';

storiesOf('components/DeadlineIndicator', module)
	.addParameters({ jest: ['DeadlineIndicator'] })
	.add('DeadlineIndicators', () => (
		<>
			<DeadlineIndicator />
			<DeadlineIndicator color="yellow" />
			<DeadlineIndicator color="success" />

			<DeadlineIndicator shape="square" />
			<DeadlineIndicator shape="diamond" />
			<DeadlineIndicator shape="circle" />
		</>
	));
