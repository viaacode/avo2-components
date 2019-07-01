import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { BlockImageExample } from './BlockImage.test';

storiesOf('BlockImage', module)
	.addParameters({ jest: ['BlockImage'] })
	.add('BlockImage', () => (BlockImageExample));
