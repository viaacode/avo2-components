import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockImageTitleTextButton } from './BlockImageTitleTextButton';
import { blockImageTitleTextButtonExample } from './BlockImageTitleTextButton.test';

storiesOf('BlockImageTitleTextButton', module)
	.addParameters({ jest: ['BlockImageTitleTextButton'] })
	.add('BlockImageTitleTextButton', () => blockImageTitleTextButtonExample);
