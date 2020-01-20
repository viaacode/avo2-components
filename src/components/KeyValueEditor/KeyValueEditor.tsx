import React, { FunctionComponent, ReactNode, useState } from 'react';

import { DefaultProps } from '../../types';
import { Table } from '../Table/Table';
import { TextInput } from '../TextInput/TextInput';

import './KeyValueEditor.scss';

export interface TextInputProps extends DefaultProps {
	data: any[] | { [key: string]: string };
	keyProp?: string;
	valueProp?: string;
	readonly?: boolean;
	onChange?: (modifiedData: any[] | { [key: string]: string }) => void;
	className?: string;
}

/**
 * Shows a tabular view of the data and allows the user to edit the data
 * Data can be either:
 * - a dictionary (key value)
 * - or an array of items, then you need to pass the keyProp and valueProp
 * @param data
 * @param keyProp
 * @param valueProp
 * @param readonly
 * @param onChange
 * @param className
 * @constructor
 */
export const KeyValueEditor: FunctionComponent<TextInputProps> = ({
	data,
	keyProp,
	valueProp,
	readonly = false,
	onChange = () => {},
	className,
}) => {
	const [dataLocal, setDataLocal] = useState<any[] | { [key: string]: string }>(data);

	const onValueChanged = (value: string, key: string) => {
		const modifiedData: any[] = JSON.parse(JSON.stringify(dataLocal)); // Poor man's deep clone
		if (Array.isArray(dataLocal)) {
			const index = modifiedData.findIndex(dataItem => dataItem[keyProp || 'key'] === key);
			if (index !== -1) {
				modifiedData[index][valueProp || 'value'] = value;
			}
		} else {
			dataLocal[key] = value;
		}
		setDataLocal(modifiedData); // Set data without triggering a rerender
	};

	const renderCell = (rowData: any, columnId: string): ReactNode | null => {
		switch (columnId) {
			case 'id':
				return <span className="c-keyvalue-label">{rowData[keyProp || 'key']}</span>;

			case 'value':
				if (readonly) {
					return <span className="c-keyvalue-label">{rowData[valueProp || 'value']}</span>;
				}

				return (
					<TextInput
						value={rowData[valueProp || 'value']}
						onChange={value => onValueChanged(value, rowData[keyProp || 'key'])}
						onBlur={() => onChange(dataLocal)}
					/>
				);

			default:
				return null;
		}
	};

	let dataArray: any[];
	if (Array.isArray(dataLocal)) {
		// data array
		dataArray = dataLocal;
		if (!keyProp || !valueProp) {
			console.error(
				'When passing a data array to the KeyValueEditor, you must also pass keyProp and valueProp properties',
				dataLocal
			);
		}
	} else {
		// data object => convert to array
		dataArray = Object.keys(dataLocal).map((key: string) => {
			return { key, value: (dataLocal as { [key: string]: string })[key] };
		});
	}
	return (
		<Table
			data={dataArray}
			columns={[
				{ id: 'id', label: 'Id' },
				{ id: 'value', label: 'Waarde' },
			]}
			renderCell={renderCell}
			className={`c-key-value-editor ${className}`}
			rowKey={keyProp || 'key'}
		/>
	);
};
