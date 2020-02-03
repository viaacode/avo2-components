import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import { useTableSort } from '../../hooks/useTableSort';
import { DefaultProps } from '../../types';
import { Form } from '../Form/Form';
import { FormGroup } from '../Form/FormGroup/FormGroup';
import { Pagination } from '../Pagination/Pagination';
import { Spacer } from '../Spacer/Spacer';
import { Table } from '../Table/Table';
import { TextArea } from '../TextArea/TextArea';
import { TextInput } from '../TextInput/TextInput';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';

import './KeyValueEditor.scss';

export type KeyValuePair = [string, string];
export type KeyValuePairs = KeyValuePair[];
export type KeyValueEditorTableCols = '0' | '1';

const ENTRIES_PER_PAGE = 20;

export interface TextInputProps extends DefaultProps {
	data: KeyValuePairs;
	keyLabel?: string;
	valueLabel?: string;
	keySeparator?: string;
	readonly?: boolean;
	onChange?: (modifiedData: KeyValuePairs) => void;
	className?: string;
	noDataMessage?: string;
	noDataForFilterMessage?: string;
}

/**
 * Shows a tabular view of the data and allows the user to edit the data
 * Data can be either:
 * - a dictionary (key value)
 * - or an array of items, then you need to pass the keyProp and valueProp
 * @param data
 * @param keyLabel
 * @param valueLabel
 * @param keySeparator
 * @param readonly
 * @param onChange
 * @param className
 * @param noDataMessage
 * @param noDataForFilterMessage
 * @constructor
 */
export const KeyValueEditor: FunctionComponent<TextInputProps> = ({
	data,
	keyLabel = 'Id',
	valueLabel = 'Waarde',
	keySeparator = '___',
	readonly = false,
	onChange = () => {},
	className,
	noDataMessage = 'Geen data',
	noDataForFilterMessage = 'Geen data die voldoet aan de filter',
}) => {
	const [paginatedData, setPaginatedData] = useState<KeyValuePairs>([]);
	const [totalFilteredResults, setTotalFilteredResults] = useState<number>(0);
	const [filterString, setFilterString] = useState<string>('');
	const [page, setPage] = useState<number>(0);
	const [sortColumn, sortOrder, handleSortClick] = useTableSort<KeyValueEditorTableCols>('0');

	useEffect(() => {
		const filteredItems = data.filter(
			row =>
				row[0].toLowerCase().includes(filterString.toLowerCase()) ||
				row[1].toLowerCase().includes(filterString.toLowerCase())
		);
		const sortedItems = filteredItems.sort((rowA: [string, string], rowB: [string, string]) => {
			if (rowA[sortColumn].toLowerCase() < rowB[sortColumn].toLowerCase()) {
				return sortOrder === 'asc' ? 1 : -1;
			}
			if (rowA[sortColumn].toLowerCase() > rowB[sortColumn].toLowerCase()) {
				return sortOrder === 'asc' ? -1 : 1;
			}
			return 0;
		});
		setPaginatedData(sortedItems.slice(page * ENTRIES_PER_PAGE, (page + 1) * ENTRIES_PER_PAGE));
		setTotalFilteredResults(sortedItems.length);
	}, [page, data, filterString, sortOrder, sortColumn]);

	const onValueChanged = (value: string, key: string) => {
		const modifiedData: KeyValuePairs = JSON.parse(JSON.stringify(data)); // Poor man's deep clone
		const index = modifiedData.findIndex(dataItem => dataItem[0] === key);
		if (index !== -1) {
			modifiedData[index][1] = value;
		}
		onChange(modifiedData); // Set data without triggering a rerender
	};

	const renderCell = (
		rowData: KeyValuePair,
		columnId: KeyValueEditorTableCols
	): ReactNode | null => {
		switch (columnId) {
			case '0':
				const keyParts = rowData[0].split(keySeparator);
				return (
					<div>
						<div className="c-keyvalue-label c-keyvalue-path">{keyParts[0]}</div>
						{!!keyParts[1] && (
							<div className="c-keyvalue-label c-keyvalue-translaton">{keyParts[1]}</div>
						)}
					</div>
				);

			case '1':
				if (readonly) {
					return <span className="c-keyvalue-label">{rowData[1]}</span>;
				}

				return (
					<TextArea
						height="auto"
						value={rowData[1]}
						onChange={value => onValueChanged(value, rowData[0])}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<div className={`c-key-value-editor ${className}`}>
			<Toolbar>
				<ToolbarRight>
					<ToolbarItem>
						<Form type="inline">
							<FormGroup>
								<TextInput icon="filter" value={filterString} onChange={setFilterString} />
							</FormGroup>
						</Form>
					</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
			<Table
				columns={[
					{ id: '0', label: keyLabel, col: '5', sortable: true },
					{ id: '1', label: valueLabel, col: '7', sortable: true },
				]}
				data={paginatedData}
				emptyStateMessage={filterString ? noDataMessage : noDataForFilterMessage}
				onColumnClick={columnId => handleSortClick(columnId as KeyValueEditorTableCols)}
				renderCell={(rowData: KeyValuePair, columnId: string) =>
					renderCell(rowData, columnId as KeyValueEditorTableCols)
				}
				rowKey={'0'}
				variant="bordered"
				sortColumn={sortColumn}
				sortOrder={sortOrder}
			/>
			<Spacer margin="top-large">
				<Pagination
					pageCount={Math.ceil(totalFilteredResults / ENTRIES_PER_PAGE)}
					onPageChange={setPage}
					currentPage={page}
				/>
			</Spacer>
		</div>
	);
};
