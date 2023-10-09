import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import styles from './Pagination.module.scss';

export interface PaginationPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	pageCount: number;
	displayCount?: number;
	currentPage?: number;
	onPageChange?: (page: number) => void;
}

export const Pagination: FunctionComponent<PaginationPropsSchema> = ({
	className,
	pageCount,
	displayCount = 5,
	currentPage = 0,
	onPageChange = noop,
}) => {
	function changePage(page: number) {
		if (page >= 0 && page <= pageCount - 1) {
			onPageChange(page);
		}
	}

	function generatePages() {
		// generate all pages if pageCount is less than the displayCount
		if (pageCount < displayCount) {
			return Array.from({ length: pageCount }, (_value: number, index: number) => index);
		}

		// generate first x pages if currentPage is less than the displayCount
		if (currentPage < displayCount / 2) {
			return Array.from({ length: displayCount }, (_value: number, index: number) => index);
		}

		// generate last x pages if currentPage is less than the pageCount - displayCount
		if (currentPage >= Math.floor(pageCount - displayCount / 2)) {
			return Array.from(
				{ length: displayCount },

				(_value: number, index: number) => pageCount - (displayCount - index)
			);
		}

		// generate x pages padding the current page
		return Array.from(
			{ length: displayCount },

			(_value: number, index: number) => index + currentPage - Math.ceil(displayCount / 2) + 1
		);
	}

	const pagesToDisplay = generatePages();

	return (
		<div className={clsx(className, 'c-pagination', styles['c-pagination'])}>
			<div
				className={clsx('c-pagination__btn', styles['c-pagination__btn'])}
				onClick={() => changePage(0)}
			>
				<Icon name={IconNameSchema.chevronsLeft} type="arrows" />
			</div>

			<div
				className={clsx('c-pagination__btn', styles['c-pagination__btn'])}
				onClick={() => changePage(currentPage - 1)}
			>
				<Icon name={IconNameSchema.chevronLeft} type="arrows" />
			</div>

			<div className={clsx('c-pagination__pages', styles['c-pagination__pages'])}>
				{pagesToDisplay.map((pageIndex: number) => (
					<div
						key={pageIndex}
						className={clsx({
							// Normal
							['c-pagination__btn']: true,
							['c-pagination__btn--active']: pageIndex === currentPage,

							// Module
							[styles['c-pagination__btn']]: true,
							[styles['c-pagination__btn--active']]: pageIndex === currentPage,
						})}
						onClick={pageIndex !== currentPage ? () => changePage(pageIndex) : noop}
					>
						{pageIndex + 1}
					</div>
				))}
			</div>

			<div
				className={clsx('c-pagination__btn', styles['c-pagination__btn'])}
				onClick={() => changePage(currentPage + 1)}
			>
				<Icon name={IconNameSchema.chevronRight} type="arrows" />
			</div>

			<div
				className={clsx('c-pagination__btn', styles['c-pagination__btn'])}
				onClick={() => changePage(pageCount - 1)}
			>
				<Icon name={IconNameSchema.chevronsRight} type="arrows" />
			</div>
		</div>
	);
};
