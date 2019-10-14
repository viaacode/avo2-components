import React, { Fragment, FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import './Table.scss';

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
	children?: ReactNode;
	columns?: Column[];
	data?: any[];
	emptyStateMessage?: string;
	horizontal?: boolean;
	onColumnClick?: (id: string) => void;
	renderCell?: (rowData: any, columnId: string, rowIndex: number, columnIndex: number) => ReactNode;
	rowKey: string;
	sortColumn?: string;
	sortOrder?: 'asc' | 'desc';
	styled?: boolean;
	untable?: boolean;
}

export const Table: FunctionComponent<TableProps> = ({
	bordered,
	children,
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
				{children ? (
					children
				) : (
					<Fragment>
						{columns.length > 0 && (
							<thead>
								<tr>
									{columns.map(heading => (
										<th
											key={heading.id}
											className={classNames({
												[`o-table-col-${heading.col}`]: heading.col,
												'c-table__header--sortable': heading.sortable,
											})}
											onClick={() => heading.sortable && onColumnClick(heading.id)}
										>
											{heading.label}
											{heading.sortable && sortColumn === heading.id && (
												<Icon name={sortOrder === 'asc' ? 'chevron-up' : 'chevron-down'} />
											)}
											{heading.sortable && sortColumn !== heading.id && (
												<Icon
													name={'chevrons-up-and-down'}
													className="c-table__header--sortable-icon"
												/>
											)}
										</th>
									))}
								</tr>
							</thead>
						)}
						{data.length > 0 && rowKey && (
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
					</Fragment>
				)}
			</table>
			{!children && data.length === 0 && emptyStateMessage && (
				<p className="u-spacer-top">{emptyStateMessage}</p>
			)}
		</Fragment>
	);
};
