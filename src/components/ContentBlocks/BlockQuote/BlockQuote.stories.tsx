import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { quoteExample } from './BlockQuote.test';

storiesOf('BlockQuote', module)
	.addParameters({ jest: ['BlockTitleImageText'] })
	.add('BlockQuote', () => (quoteExample));
