import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockIntro } from './BlockIntro';

storiesOf('BlockIntro', module)
	.addParameters({ jest: ['BlockIntro'] })
	.add('BlockIntro', () => (
		<BlockIntro title="Page title" subtitle="subtitle" text={loremIpsum({ count: 3 })} />
	))
	.add('BlockIntro without title', () => (
		<BlockIntro subtitle="subtitle" text={loremIpsum({ count: 3 })} />
	))
	.add('BlockIntro without subtitle', () => (
		<BlockIntro title="Page title" text={loremIpsum({ count: 3 })} />
	))
	.add('BlockIntro only text', () => <BlockIntro text={loremIpsum({ count: 3 })} />);
