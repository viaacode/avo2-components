import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockIntro } from './BlockIntro';

const text = loremIpsum({ count: 10 });

storiesOf('BlockIntro', module)
	.addParameters({ jest: ['BlockIntro'] })
	.add('BlockIntro', () => <BlockIntro text={text} />);
