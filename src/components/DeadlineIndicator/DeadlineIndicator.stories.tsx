import { storiesOf } from '@storybook/react';

import { DeadlineIndicator } from './DeadlineIndicator.js';

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
