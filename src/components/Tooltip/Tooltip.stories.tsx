import React from 'react';

import { storiesOf } from '@storybook/react';

import { Tooltip } from './Tooltip';

storiesOf('Tooltip', module)
	.addParameters({ jest: ['Tooltip'] })
	.add('Tooltip top', () => (
		<Tooltip id="test1" placement="top">
			Top tooltip
		</Tooltip>
	))
	.add('Tooltip right', () => (
		<Tooltip id="test1" placement="top">
			Top tooltip
		</Tooltip>
	))
	.add('Tooltip bottom', () => (
		<Tooltip id="test1" placement="top">
			Top tooltip
		</Tooltip>
	))
	.add('Tooltip left', () => (
		<Tooltip id="test1" placement="top">
			Top tooltip
		</Tooltip>
	));
