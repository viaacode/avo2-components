import { storiesOf } from '@storybook/react';

import { COLORS } from '../../colors/index.js';

import { Spinner } from './Spinner.js';

storiesOf('components/Spinner', module)
	.addParameters({ jest: ['Spinner'] })
	.add('Spinner', () => <Spinner />)
	.add('Large spinner', () => <Spinner size="large" />)
	.add('Light spinner', () => (
		<span style={{ padding: '20px', backgroundColor: COLORS.GRAYSCALE.G800 }}>
			<Spinner light />
		</span>
	));
