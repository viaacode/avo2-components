import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockUitgeklaard } from './BlockUitgeklaard';

storiesOf('blocks/BlockUitgeklaard', module)
	.addParameters({ jest: ['BlockUitgeklaard'] })
	.add('BlockUitgeklaard (1 titel)', () => (
		<BlockUitgeklaard date="2016-07-13T18:46:01.933Z" titles={['Dit is een leuke titel']} />
	))
	.add('BlockUitgeklaard (meerdere titels)', () => (
		<BlockUitgeklaard
			date="2016-07-13T18:46:01.933Z"
			titles={['Dit is een leuke titel', 'Awesome']}
		/>
	))
	.add('BlockUitgeklaard (geen datum)', () => (
		<BlockUitgeklaard date="" titles={['Dit is een leuke titel', 'Awesome']} />
	));
