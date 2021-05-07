import classnames from 'classnames';
import { isNil, isString } from 'lodash-es';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';
import { Checkbox } from '../Checkbox/Checkbox';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';
import { Panel } from '../Panel/Panel';
import { PanelBody } from '../Panel/PanelBody/PanelBody';
import { Spacer } from '../Spacer/Spacer';

import './Table.scss';

export type TableColumnSchema = {
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
	label?: string;
	icon?: IconNameSchema;
	tooltip?: string;
	sortable?: boolean;
	dataType?: string;
};

export interface TablePropsSchema extends DefaultProps {
	align?: boolean;
	children?: ReactNode;
	columns?: TableColumnSchema[];
	data?: any[];
	emptyStateMessage?: string;
	horizontal?: boolean;
	nowrap?: boolean;
	onColumnClick?: (id: string) => void;
	onRowClick?: (rowData: any) => void;
	renderCell?: (
		rowData: any,
		columnId: string,
		rowIndex: number,
		columnIndex: number
	) => ReactNode;
	rowKey?: string | ((rowData: any) => string);
	sortColumn?: string;
	sortOrder?: 'asc' | 'desc';
	striped?: boolean;
	untable?: boolean;
	variant?: 'bordered' | 'invisible' | 'styled';
	showCheckboxes?: boolean;
	useCards?: boolean;
	selectedItemIds?: (string | number)[];
	onSelectionChanged?: (selectedItemIds: (string | number)[]) => void;
	onSelectAll?: () => void;
}

export const Table: FunctionComponent<TablePropsSchema> = ({
	align = true,
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
	showCheckboxes = false,
	useCards = false,
	selectedItemIds = [],
	onSelectionChanged = () => {},
	onSelectAll = () => {},
}) => {
	const getRowKey = (rowData: any): string => {
		if (isString(rowKey)) {
			return rowData[rowKey];
		}
		if (isNil(rowKey)) {
			return rowData.id;
		}
		return rowKey(rowData);
	};

	const handleRowClick = (rowData: any) => {
		if (onRowClick) {
			onRowClick(rowData);
		} else if (showCheckboxes) {
			toggleItemSelection(rowData);
		}
	};

	const areAllItemsSelected = () => {
		return selectedItemIds.length >= (data || []).length;
	};

	const isItemSelected = (dataItem: any) =>
		selectedItemIds.find(selectedItemId => selectedItemId === getRowKey(dataItem));

	const toggleAllItemSelection = () => {
		if (areAllItemsSelected()) {
			onSelectionChanged([]);
		} else {
			onSelectAll();
		}
	};

	const toggleItemSelection = (item: any) => {
		if (isItemSelected(item)) {
			onSelectionChanged(
				selectedItemIds.filter(selectedItemId => selectedItemId !== getRowKey(item))
			);
		} else {
			onSelectionChanged([...selectedItemIds, getRowKey(item)]);
		}
	};

	const renderHeading = (heading: TableColumnSchema) => {
		const { id, col, sortable, label, icon, tooltip } = heading;

		const isColumnSorted = sortColumn === id;
		const sortIconProps = {
			name: (isColumnSorted
				? sortOrder === 'asc'
					? 'chevron-up'
					: 'chevron-down'
				: 'chevrons-up-and-down') as IconNameSchema,
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
				{
					<div title={tooltip}>
						<Flex>
							{!!icon && (
								<Spacer margin="right-small">
									<Icon name={icon} />
								</Spacer>
							)}
							{label || null}
							{sortable && (
								<Spacer margin="left-small">
									<Icon {...sortIconProps} />
								</Spacer>
							)}
						</Flex>
					</div>
				}
			</th>
		);
	};

	const renderTable = () => (
		<>
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
					<>
						{columns.length > 0 && (
							<thead>
								<tr>
									{showCheckboxes && (
										<th className="c-table__checkbox-column">
											<Checkbox
												label=""
												checked={areAllItemsSelected()}
												onChange={toggleAllItemSelection}
											/>
										</th>
									)}
									{columns.map(renderHeading)}
								</tr>
							</thead>
						)}
						{data.length > 0 && rowKey && (
							<tbody>
								{data.map((rowData, rowIndex) => (
									<tr
										key={`table-row-${getRowKey(rowData)}`}
										className={
											onRowClick || showCheckboxes ? 'u-clickable' : ''
										}
										onClick={() => handleRowClick(rowData)}
									>
										{showCheckboxes && (
											<td className="c-table__checkbox-column">
												<Checkbox
													label=""
													checked={
														!!selectedItemIds.find(
															selectedItemId =>
																selectedItemId ===
																getRowKey(rowData)
														)
													}
													onChange={() => toggleItemSelection(rowData)}
												/>
											</td>
										)}
										{columns
											.map(col => col.id)
											.map((columnId, columnIndex) => (
												<td key={columnIndex}>
													{renderCell(
														rowData,
														columnId,
														rowIndex,
														columnIndex
													)}
												</td>
											))}
									</tr>
								))}
							</tbody>
						)}
					</>
				)}
			</table>
			{!children && !data.length && emptyStateMessage && (
				<Spacer margin={['left-small', 'top']}>{emptyStateMessage}</Spacer>
			)}
		</>
	);

	const renderCards = () => {
		if (!data || !rowKey) {
			return null;
		}
		return (
			<>
				{(data || []).map((rowData, rowIndex) => (
					<div
						key={`table-card-${getRowKey(rowData)}`}
						className={onRowClick || showCheckboxes ? 'u-clickable' : ''}
						onClick={() => handleRowClick(rowData)}
					>
						<Spacer margin="bottom">
							<Panel>
								<PanelBody>
									{columns
										.map(col => col.id)
										.map((columnId, columnIndex) => (
											<div key={columnIndex}>
												{renderCell(
													rowData,
													columnId,
													rowIndex,
													columnIndex
												)}
											</div>
										))}
								</PanelBody>
							</Panel>
						</Spacer>
					</div>
				))}
			</>
		);
	};

	return useCards ? renderCards() : renderTable();
};
