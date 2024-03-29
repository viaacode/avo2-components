import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { Pagination } from './Pagination';

const PaginationStoryComponent = ({
	children,
	initialPageIndex = 0,
}: {
	children: ReactElement;
	initialPageIndex?: number;
}) => {
	const [currentPage, setCurrentPage] = useState(initialPageIndex);

	return cloneElement(children, {
		currentPage,
		onPageChange: (index: number) => {
			action('page changed')(index);
			setCurrentPage(index);
		},
	});
};

storiesOf('components/Pagination', module)
	.addParameters({ jest: ['Pagination'] })
	.add('Pagination', () => (
		<PaginationStoryComponent initialPageIndex={0}>
			<Pagination pageCount={20} />
		</PaginationStoryComponent>
	))
	.add('Pagination with options', () => (
		<PaginationStoryComponent initialPageIndex={9}>
			<Pagination pageCount={20} displayCount={7} />
		</PaginationStoryComponent>
	));
