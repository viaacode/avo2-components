import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockIntro } from './BlockIntro';

const text = loremIpsum({ count: 30 });

storiesOf('BlockIntro', module)
	.addParameters({ jest: ['BlockIntro'] })
	.add('BlockIntro', () => (
			<BlockIntro text={text}/>
	));
