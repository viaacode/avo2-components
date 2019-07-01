import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { BlockImageText } from './BlockSubtitle';
import { blockImageTextExample } from './BlockImageText.test';

storiesOf('BlockImageText', module)
	.addParameters({ jest: ['BlockImageText'] })
	.add('BlockImageText', () => (blockImageTextExample));
