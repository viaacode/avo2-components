import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { BlockSubtitle } from './BlockSubtitle';
import { blockSubtitleExample } from './BlockSubtitle.test';

storiesOf('BlockSubtitle', module)
	.addParameters({ jest: ['BlockSubtitle'] })
	.add('BlockSubtitle', () => (blockSubtitleExample));
