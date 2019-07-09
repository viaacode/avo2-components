import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

type Column = {
	id: string;
	label: string;
	sortable?: boolean;
};

export interface TableProps {
	data: any[];
	rowKey: string;
	columns: Column[];
	sortColumn?: string;
	sortOrder?: 'asc' | 'desc';
	styled?: boolean;
	bordered?: boolean;
	emptyStateMessage?: string;
	renderCell?: (row: any, cell: any, rowIndex: number, cellIndex: number) => ReactNode;
	onColumnClick?: (id: string) => void;
}

export const Table: FunctionComponent<TableProps> = ({
	data = [],
	rowKey,
	columns = [],
	sortColumn,
	sortOrder = 'asc',
	styled,
	bordered,
	emptyStateMessage,
	renderCell = () => null,
	onColumnClick = () => {},
}: TableProps) => {
	return (
		<table
			className={classNames('c-table', {
				'c-table--styled': styled || bordered,
				'c-table--bordered': bordered,
			})}
		>
			{columns.length > 0 && (
				<thead>
					<tr>
						{columns.map(heading => (
							<th key={heading.id} onClick={() => heading.sortable && onColumnClick(heading.id)}>
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
					{data.map((row, rowIndex) => (
						<tr key={row[rowKey]}>
							{Object.keys(row)
								.filter(key => columns.find(column => column.id === key) && row)
								.map((cell, cellIndex) => (
									<td key={cellIndex}>{renderCell(row, cell, rowIndex, cellIndex)}</td>
								))}
						</tr>
					))}
				</tbody>
			)}
			{data.length === 0 && emptyStateMessage && (
				<p className="u-spacer-top">{emptyStateMessage}</p>
			)}
		</table>
	);
};
