import React from 'react';

import { storiesOf } from '@storybook/react';

import { Pagination } from './Pagination';

storiesOf('Pagination', module)
	.addParameters({ jest: ['Pagination'] })
	.add('Pagination', () => <Pagination pageCount={20} initialPage={10} displayCount={3} />);
