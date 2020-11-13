import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockEventbrite } from './BlockEventbrite';

storiesOf('blocks/BlockEventbrite', module)
	.addParameters({ jest: ['BlockEventbrite'] })
	.add('BlockEventbrite', () => <BlockEventbrite eventId="105636373236" label="Register" />)
	.add('BlockEventbrite custom button', () => (
		<BlockEventbrite eventId="105636373236" label="Register" icon="tag" type="pupil-primary" />
	));
