import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { BlockImageText } from './BlockImageText';
import { blockImageTextExample } from './BlockImageText.test';

storiesOf('BlockImageText', module)
	.addParameters({ jest: ['BlockImageText'] })
	.add('BlockImageText', () => (blockImageTextExample));
