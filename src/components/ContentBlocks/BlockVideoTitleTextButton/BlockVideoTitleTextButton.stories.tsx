import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';
import { blockVideoTitleButtonExample } from './BlockVideoTitleTextButton.test';

storiesOf('BlockVideoTitleTextButton', module)
	.addParameters({ jest: ['BlockVideoTitleTextButton'] })
	.add('BlockVideoTitleTextButton', () => blockVideoTitleButtonExample);
