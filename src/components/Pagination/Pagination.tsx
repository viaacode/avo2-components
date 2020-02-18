import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import './Pagination.scss';

export interface PaginationProps extends DefaultProps {
	pageCount: number;
	displayCount?: number;
	currentPage?: number;
	onPageChange?: (page: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
	className,
	pageCount,
	displayCount = 5,
	currentPage = 0,
	onPageChange = () => {},
}) => {
	function changePage(page: number) {
		if (page >= 0 && page <= pageCount - 1) {
			onPageChange(page);
		}
	}

	function generatePages() {
		// generate all pages if pageCount is less than the displayCount
		if (pageCount < displayCount) {
			// @ts-ignore
			return Array.from({ length: pageCount }, (value: number, index: number) => index);
		}

		// generate first x pages if currentPage is less than the displayCount
		if (currentPage < displayCount / 2) {
			// @ts-ignore
			return Array.from({ length: displayCount }, (value: number, index: number) => index);
		}

		// generate last x pages if currentPage is less than the pageCount - displayCount
		if (currentPage >= Math.floor(pageCount - displayCount / 2)) {
			return Array.from(
				{ length: displayCount },
				// @ts-ignore
				(value: number, index: number) => pageCount - (displayCount - index)
			);
		}

		// generate x pages padding the current page
		return Array.from(
			{ length: displayCount },
			// @ts-ignore
			(value: number, index: number) => index + currentPage - Math.ceil(displayCount / 2) + 1
		);
	}

	const pagesToDisplay = generatePages();

	return (
		<div className={classnames(className, 'c-pagination')}>
			<div className="c-pagination__btn" onClick={() => changePage(0)}>
				<Icon name="chevrons-left" type="arrows" />
			</div>
			<div className="c-pagination__btn" onClick={() => changePage(currentPage - 1)}>
				<Icon name="chevron-left" type="arrows" />
			</div>
			<div className="c-pagination__pages">
				{pagesToDisplay.map((pageIndex: number) => (
					<div
						key={pageIndex}
						className={classnames('c-pagination__btn', {
							'c-pagination__btn--active': pageIndex === currentPage,
						})}
						onClick={pageIndex !== currentPage ? () => changePage(pageIndex) : () => {}}
					>
						{pageIndex + 1}
					</div>
				))}
			</div>
			<div className="c-pagination__btn" onClick={() => changePage(currentPage + 1)}>
				<Icon name="chevron-right" type="arrows" />
			</div>
			<div className="c-pagination__btn" onClick={() => changePage(pageCount - 1)}>
				<Icon name="chevrons-right" type="arrows" />
			</div>
		</div>
	);
};
