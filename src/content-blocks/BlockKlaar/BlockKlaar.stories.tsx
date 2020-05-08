import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockKlaar } from './BlockKlaar';

storiesOf('blocks/BlockKlaar', module)
	.addParameters({ jest: ['BlockKlaar'] })
	.add('BlockKlaar (1 titel)', () => (
		<BlockKlaar date="2016-07-13T18:46:01.933Z" elements={[{ title: 'Dit is een leuke titel' }]} />
	))
	.add('BlockKlaar (meerdere titels)', () => (
		<BlockKlaar
			date="2016-07-13T18:46:01.933Z"
			elements={[{ title: 'Dit is een leuke titel' }, { title: 'Awesome' }]}
		/>
	));
