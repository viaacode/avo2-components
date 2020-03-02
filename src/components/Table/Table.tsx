import classnames from 'classnames';
import React, { Fragment, FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/Icon.types';

import './Table.scss';

export type TableColumn = {
	col?:
		| '1'
		| '2'
		| '3'
		| '4'
		| '5'
		| '6'
		| '7'
		| '8'
		| '9'
		| '10'
		| '11'
		| '12'
		| '13'
		| '14'
		| '15';
	id: string;
	label: string;
	sortable?: boolean;
};

export interface TableProps extends DefaultProps {
	align?: boolean;
	children?: ReactNode;
	columns?: TableColumn[];
	data?: any[];
	emptyStateMessage?: string;
	horizontal?: boolean;
	nowrap?: boolean;
	onColumnClick?: (id: string) => void;
	onRowClick?: (rowData: any) => void;
	renderCell?: (rowData: any, columnId: string, rowIndex: number, columnIndex: number) => ReactNode;
	rowKey?: string;
	sortColumn?: string;
	sortOrder?: 'asc' | 'desc';
	striped?: boolean;
	untable?: boolean;
	variant?: 'bordered' | 'invisible' | 'styled';
}

export const Table: FunctionComponent<TableProps> = ({
	align,
	children,
	className,
	columns = [],
	data = [],
	emptyStateMessage,
	horizontal,
	nowrap,
	onColumnClick = () => {},
	onRowClick,
	renderCell = () => null,
	rowKey,
	sortColumn,
	sortOrder = 'asc',
	striped,
	untable,
	variant,
}) => {
	const renderHeading = (heading: TableColumn) => {
		const { id, col, sortable, label } = heading;

		const isColumnSorted = sortColumn === id;
		const sortIconProps = {
			name: (isColumnSorted
				? sortOrder === 'asc'
					? 'chevron-up'
					: 'chevron-down'
				: 'chevrons-up-and-down') as IconName,
			className: isColumnSorted ? undefined : 'c-table__header--sortable-icon',
		};

		if (!children && !rowKey) {
			console.error(
				'A rowKey param is required when not passing any children to the table component'
			);
		}

		return (
			<th
				key={`table-head-${id}`}
				className={classnames({
					[`o-table-col-${col}`]: col,
					'c-table__header--sortable': sortable,
				})}
				onClick={() => sortable && onColumnClick(id)}
			>
				{label}
				{sortable && <Icon {...sortIconProps} />}
			</th>
		);
	};

	return (
		<Fragment>
			<table
				className={classnames(className, 'c-table', {
					'c-table--align-middle': align,
					'c-table--bordered': variant === 'bordered',
					'c-table--invisible': variant === 'invisible',
					'c-table--horizontal': horizontal,
					'c-table--nowrap': nowrap,
					'c-table--striped': striped,
					'c-table--styled': variant === 'styled' || variant === 'bordered',
					'c-table--untable': untable,
				})}
			>
				{children ? (
					children
				) : (
					<Fragment>
						{columns.length > 0 && (
							<thead>
								<tr>{columns.map(renderHeading)}</tr>
							</thead>
						)}
						{data.length > 0 && rowKey && (
							<tbody>
								{data.map((rowData, rowIndex) => (
									<tr
										key={`table-row-${rowData[rowKey]}`}
										className={onRowClick ? 'u-clickable' : ''}
										onClick={() => (onRowClick ? onRowClick(rowData) : () => {})}
									>
										{columns
											.map(col => col.id)
											.map((columnId, columnIndex) => (
												<td key={columnIndex}>
													{renderCell(rowData, columnId, rowIndex, columnIndex)}
												</td>
											))}
									</tr>
								))}
							</tbody>
						)}
					</Fragment>
				)}
			</table>
			{!children && !data.length && emptyStateMessage && (
				<p className="u-spacer-top">{emptyStateMessage}</p>
			)}
		</Fragment>
	);
};
