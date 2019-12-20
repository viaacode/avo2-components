import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockIntro } from './BlockIntro';

storiesOf('BlockIntro', module)
	.addParameters({ jest: ['BlockIntro'] })
	.add('BlockIntro', () => <BlockIntro title="Page title" text={loremIpsum({ count: 3 })} />);
