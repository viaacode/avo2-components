import React from 'react';

import { storiesOf } from '@storybook/react';

import { Badge } from './Badge';

storiesOf('Badge', module)
	.addParameters({ jest: ['Badge'] })
	.add('Badge', () => <Badge text="Pending approval" />)
	.add('Success badge', () => <Badge text="Pending approval" type="success" />)
	.add('Error badge', () => <Badge text="Pending approval" type="error" />);
