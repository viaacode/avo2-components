import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import { BlockIntro } from './BlockIntro';

storiesOf('blocks/BlockIntro', module)
	.addParameters({ jest: ['BlockIntro'] })
	.add('BlockIntro', () => <BlockIntro title="Page title" content={loremIpsum({ count: 3 })} />)
	.add('BlockIntro (right)', () => (
		<BlockIntro title="Page title" content={loremIpsum({ count: 3 })} align="right" />
	));
