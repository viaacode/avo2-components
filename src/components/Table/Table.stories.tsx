import React, { ReactElement, useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { Icon } from '../Icon/Icon';
import { Table } from './Table';

const COLUMNS = [
	{ id: 'name', label: 'Name', sortable: true },
	{ id: 'age', label: 'Age (in yrs)', sortable: true },
	{ id: 'cat', label: 'Has cat?' },
	{ id: 'dog', label: 'Has dog?' },
];

const DATA = [
	{ id: 0, name: 'Mark', age: '28', cat: true, dog: false },
	{ id: 1, name: 'Jessica', age: '34', cat: true, dog: true },
	{ id: 2, name: 'Gabriela', age: '19', cat: false, dog: false },
	{ id: 3, name: 'Filip', age: '72', cat: true, dog: true },
	{ id: 4, name: 'Vlatko', age: '29', cat: false, dog: true },
	{ id: 5, name: 'Eric', age: '34', cat: true, dog: false },
	{ id: 6, name: 'Mariah', age: '34', cat: false, dog: true },
];

const comparators: any = {
	name: (order: 'asc' | 'desc') => (a: any, b: any) => {
		if (a.name < b.name) {
			return order === 'asc' ? -1 : 1;
		}

		if (a.name > b.name) {
			return order === 'asc' ? 1 : -1;
		}

		return 0;
	},
	age: (order: 'asc' | 'desc') => (a: any, b: any) => (a.age - b.age) * (order === 'asc' ? 1 : -1),
};

const TableStoryComponent = ({ children }: { children: ReactElement }) => {
	const [sortColumn, setSortColumn] = useState('name');
	const [sortOrder, setSortOrder] = useState('asc');

	const sort = (items: any[]) => {
		return items.sort(comparators[sortColumn](sortOrder));
	};

	const [data, setData] = useState(sort(children.props.data));

	useEffect(() => {
		// re-sort the list if the column or order changes
		setData(sort(data));
	}, [sortOrder, sortColumn, sort, data]);

	return (
		<Table
			{...children.props}
			data={data}
			sortColumn={sortColumn}
			sortOrder={sortOrder}
			onColumnClick={(id: string) => {
				action('Column clicked')(id);
				if (id === sortColumn) {
					setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
				} else {
					setSortColumn(id);
					setSortOrder('asc');
				}
			}}
		/>
	);
};

function renderCell(r: any[], c: any) {
	switch (c) {
		case 'dog':
		case 'cat':
			return r[c] ? <Icon name="check" /> : <Icon name="x" />;
		default:
			return r[c];
	}
}

storiesOf('Table', module)
	.addParameters({ jest: ['Table'] })
	.add('Table', () => (
		<TableStoryComponent>
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
			/>
		</TableStoryComponent>
	))
	.add('Styled Table', () => (
		<TableStoryComponent>
			<Table
				styled
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
			/>
		</TableStoryComponent>
	))
	.add('Bordered Table', () => (
		<TableStoryComponent>
			<Table
				bordered
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
			/>
		</TableStoryComponent>
	))
	.add('Table empty state', () => (
		<TableStoryComponent>
			<Table
				columns={COLUMNS}
				data={[]}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				emptyStateMessage="No data was found. Try again later."
			/>
		</TableStoryComponent>
	));
