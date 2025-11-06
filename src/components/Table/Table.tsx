import { type Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import React, { Fragment, FunctionComponent, ReactNode } from 'react';

import { isNil } from '../../helpers/is-nil.js';
import { noop } from '../../helpers/noop.js';
import { DefaultProps } from '../../types/index.js';
import { Checkbox } from '../Checkbox/Checkbox.js';
import { Flex } from '../Flex/Flex.js';
import { Icon } from '../Icon/Icon.js';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { Panel } from '../Panel/Panel.js';
import { PanelBody } from '../Panel/PanelBody/PanelBody.js';
import { RadioButton } from '../RadioButton/RadioButton.js';
import { Spacer } from '../Spacer/Spacer.js';

import styles from './Table.module.scss';

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
	dataType?: 'string' | 'dateTime' | 'boolean' | 'number' | 'booleanNullsLast';
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
	sortOrder?: Avo.Search.OrderDirection;
	striped?: boolean;
	untable?: boolean;
	variant?: 'bordered' | 'invisible' | 'styled';
	showCheckboxes?: boolean;
	showRadioButtons?: boolean;
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
	onColumnClick = noop,
	onRowClick,
	renderCell = () => null,
	rowKey,
	sortColumn,
	sortOrder = 'asc',
	striped,
	untable,
	variant,
	showCheckboxes = false,
	showRadioButtons = false,
	useCards = false,
	selectedItemIds = [],
	onSelectionChanged = noop,
	onSelectAll = noop,
}) => {
	const getRowKey = (rowData: any): string => {
		if (typeof rowKey === 'string') {
			return rowData[rowKey];
		}
		if (isNil(rowKey)) {
			return rowData.id;
		}
		return (rowKey as (rowData: any) => any)(rowData);
	};

	const handleRowClick = (rowData: any) => {
		if (onRowClick) {
			onRowClick(rowData);
		}
	};

	const areAllItemsSelected = () => {
		return selectedItemIds.length >= (data || []).length;
	};

	const isItemSelected = (dataItem: any) =>
		selectedItemIds.find((selectedItemId) => selectedItemId === getRowKey(dataItem));

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
				selectedItemIds.filter((selectedItemId) => selectedItemId !== getRowKey(item))
			);
		} else {
			onSelectionChanged([...selectedItemIds, getRowKey(item)]);
		}
	};

	const toggleRadioItemSelection = (item: any) => {
		if (isItemSelected(item)) {
			onSelectionChanged([]);
		} else {
			onSelectionChanged([getRowKey(item)]);
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
			className: isColumnSorted
				? undefined
				: clsx('c-table__header--sortable-icon', styles['c-table__header--sortable-icon']),
		};

		if (!children && !rowKey) {
			console.error(
				'A rowKey param is required when not passing any children to the table component'
			);
		}

		return (
			<th
				key={`table-head-${id}`}
				className={clsx({
					// Normal
					[`o-table-col-${col}`]: col,
					['c-table__header--sortable']: sortable,

					// Module
					[styles[`o-table-col-${col}`]]: col,
					[styles['c-table__header--sortable']]: sortable,
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
				className={clsx(className, {
					// Normal
					['c-table']: true,
					['c-table--align-middle']: align,
					['c-table--bordered']: variant === 'bordered',
					['c-table--invisible']: variant === 'invisible',
					['c-table--horizontal']: horizontal,
					['c-table--nowrap']: nowrap,
					['c-table--striped']: striped,
					['c-table--styled']: variant === 'styled' || variant === 'bordered',
					['c-table--untable']: untable,

					// Module
					[styles['c-table']]: true,
					[styles['c-table--align-middle']]: align,
					[styles['c-table--bordered']]: variant === 'bordered',
					[styles['c-table--invisible']]: variant === 'invisible',
					[styles['c-table--horizontal']]: horizontal,
					[styles['c-table--nowrap']]: nowrap,
					[styles['c-table--striped']]: striped,
					[styles['c-table--styled']]: variant === 'styled' || variant === 'bordered',
					[styles['c-table--untable']]: untable,
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
										<th
											className={clsx(
												'c-table__checkbox-column',
												styles['c-table__checkbox-column']
											)}
										>
											<Checkbox
												label=""
												checked={areAllItemsSelected()}
												onChange={toggleAllItemSelection}
											/>
										</th>
									)}
									{showRadioButtons && (
										<th
											className={clsx(
												'c-table__checkbox-column',
												styles['c-table__checkbox-column']
											)}
										/>
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
										className={clsx(className, {
											'u-clickable': !!onRowClick,
										})}
										onClick={() => handleRowClick(rowData)}
									>
										{showCheckboxes && (
											<td
												className={clsx(
													'u-clickable',
													'c-table__checkbox-column',
													styles['c-table__checkbox-column']
												)}
												onClick={() => toggleItemSelection(rowData)}
											>
												<Checkbox
													label=""
													checked={
														!!selectedItemIds.find(
															(selectedItemId) =>
																selectedItemId ===
																getRowKey(rowData)
														)
													}
												/>
											</td>
										)}
										{showRadioButtons && (
											<td
												className={clsx(
													'u-clickable',
													'c-table__checkbox-column',
													styles['c-table__checkbox-column']
												)}
												onClick={() => toggleRadioItemSelection(rowData)}
											>
												<RadioButton
													label=""
													name={getRowKey(rowData)}
													value={getRowKey(rowData)}
													checked={
														!!selectedItemIds.find(
															(selectedItemId) =>
																selectedItemId ===
																getRowKey(rowData)
														)
													}
												/>
											</td>
										)}
										{columns
											.map((col) => col.id)
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
						className={clsx(className, 'c-table__card', styles['c-table__card'], {
							'u-clickable': !!onRowClick || showCheckboxes,
						})}
						onClick={() => handleRowClick(rowData)}
					>
						<Spacer margin="bottom">
							<Panel>
								<PanelBody>
									{columns
										.map((col) => col.id)
										.map((columnId, columnIndex) => (
											<Fragment key={columnIndex}>
												{renderCell(
													rowData,
													columnId,
													rowIndex,
													columnIndex
												)}
											</Fragment>
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
