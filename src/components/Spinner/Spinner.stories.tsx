import React from 'react';

import { storiesOf } from '@storybook/react';

import { COLORS } from '../../colors';
import { Spinner } from './Spinner';

storiesOf('Spinner', module)
	.addParameters({ jest: ['Spinner'] })
	.add('Spinner', () => <Spinner />)
	.add('Large spinner', () => <Spinner size="large" />)
	.add('Light spinner', () => (
		<span style={{ padding: '20px', background: COLORS.GRAYSCALE.G800 }}>
			<Spinner light />
		</span>
	));
