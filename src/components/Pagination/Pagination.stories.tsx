import React from 'react';

import { storiesOf } from '@storybook/react';

import { Pagination } from './Pagination';

storiesOf('Pagination', module)
	.addParameters({ jest: ['Pagination'] })
	.add('Pagination', () => <Pagination pageCount={20} />)
	.add('Pagination with options', () => (
		<Pagination pageCount={20} displayCount={7} initialPage={9} />
	));
