import React, { Fragment, FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';
import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

export type Column = {
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
	bordered?: boolean;
	columns: Column[];
	data: any[];
	emptyStateMessage?: string;
	horizontal?: boolean;
	onColumnClick?: (id: string) => void;
	renderCell?: (row: any, cell: any, rowIndex: number, cellIndex: number) => ReactNode;
	rowKey: string;
	sortColumn?: string;
	sortOrder?: 'asc' | 'desc';
	styled?: boolean;
	untable?: boolean;
}

export const Table: FunctionComponent<TableProps> = ({
	bordered,
	className,
	columns = [],
	data = [],
	emptyStateMessage,
	horizontal,
	onColumnClick = () => {},
	renderCell = () => null,
	rowKey,
	sortColumn,
	sortOrder = 'asc',
	styled,
	untable,
}) => {
	return (
		<Fragment>
			<table
				className={classNames(className, 'c-table', {
					'c-table--bordered': bordered,
					'c-table--horizontal': horizontal,
					'c-table--styled': styled || bordered,
					'c-table--untable': untable,
				})}
			>
				{columns.length > 0 && (
					<thead>
						<tr>
							{columns.map(heading => (
								<th
									key={heading.id}
									className={classNames({ [`o-table-col-${heading.col}`]: heading.col })}
									onClick={() => heading.sortable && onColumnClick(heading.id)}
								>
									{heading.label}
									{heading.sortable && sortColumn === heading.id && (
										<Icon name={sortOrder === 'asc' ? 'chevron-up' : 'chevron-down'} />
									)}
								</th>
							))}
						</tr>
					</thead>
				)}
				{data.length > 0 && (
					<tbody>
						{data.map((rowData, rowIndex) => (
							<tr key={rowData[rowKey]}>
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
			</table>
			{data.length === 0 && emptyStateMessage && (
				<p className="u-spacer-top">{emptyStateMessage}</p>
			)}
		</Fragment>
	);
};
