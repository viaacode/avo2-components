import React from 'react';

import { storiesOf } from '@storybook/react';
import { BlockKlaar } from './BlockKlaar';

storiesOf('blocks/BlockKlaar', module)
	.addParameters({ jest: ['BlockKlaar'] })
	.add('BlockKlaar (1 titel)', () => (
		<BlockKlaar date="DINSDAG 31 MAART" titles={['Dit is een leuke titel']} />
	))
	.add('BlockKlaar (meerdere titels)', () => (
		<BlockKlaar date="DINSDAG 31 MAART" titles={['Dit is een leuke titel', 'Awesome']} />
	));
