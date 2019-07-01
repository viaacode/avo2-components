import React from 'react';

import { storiesOf } from '@storybook/react';

import { blockTitleImageTextExample } from './BlockTitleImageText.test';

storiesOf('BlockTitleImageText', module)
	.addParameters({ jest: ['BlockTitleImageText'] })
	.add('BlockTitleImageText', () => blockTitleImageTextExample);
