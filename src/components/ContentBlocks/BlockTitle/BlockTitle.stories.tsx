import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockTitle } from './BlockTitle';
import { blockTitleExample } from './BlockTitle.test';

storiesOf('BlockTitle', module)
	.addParameters({ jest: ['BlockTitle'] })
	.add('BlockTitle', () => blockTitleExample);
