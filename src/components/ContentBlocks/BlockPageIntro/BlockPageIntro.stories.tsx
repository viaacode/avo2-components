import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import { BlockPageIntro } from './BlockPageIntro';

const title = 'Page title';
const subtitle = loremIpsum({ count: 1 });

storiesOf('BlockPageIntro', module)
	.addParameters({ jest: ['BlockPageIntro'] })
	.add('BlockPageIntro', () => <BlockPageIntro title={title} subtitle={subtitle} />);
