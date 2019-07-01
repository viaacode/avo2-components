import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockPageIntro } from './BlockPageIntro';
import { blockPageIntroExample } from './BlockPageIntro.test';

storiesOf('BlockPageIntro', module)
	.addParameters({ jest: ['BlockPageIntro'] })
	.add('BlockPageIntro', () => blockPageIntroExample);
