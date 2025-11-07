import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { type ReactElement, useCallback, useEffect, useState } from 'react';

import { Button } from '../Button/Button.js';
import { Icon } from '../Icon/Icon.js';
import { IconNameSchema } from '../Icon/Icon.types.js';

import { Table, type TableColumnSchema } from './Table.js';

const COLUMNS: TableColumnSchema[] = [
	{ id: 'name', label: 'Name', sortable: true },
	{ id: 'age', label: 'Age (in yrs)', sortable: true },
	{ id: 'cat', label: 'Has cat?', col: '2' },
	{ id: 'dog', label: 'Has dog?', col: '2' },
	{ id: 'actions', label: '' },
];

const COLUMNS_WITH_ICONS: TableColumnSchema[] = [
	{ tooltip: 'Name of the person', id: 'name', label: 'Name', sortable: true },
	{ tooltip: 'Age', icon: IconNameSchema.clock, id: 'age', sortable: true },
	{ tooltip: 'Has cats', icon: IconNameSchema.inbox, id: 'cat', label: 'Has cat?', col: '2' },
	{ tooltip: 'Has dogs', icon: IconNameSchema.home, id: 'dog', label: 'Has dog?', col: '2' },
	{ tooltip: 'Actions', icon: IconNameSchema.star, id: '' },
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
	const [sortColumn, setSortColumn] = useState<string>('name');
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

	const sort = useCallback(
		(items: any[]) => {
			return items.sort(comparators[sortColumn](sortOrder));
		},
		[sortColumn, sortOrder]
	);

	const [selectedItems, setSelectedItems] = useState<any[]>(sort(children.props.data).slice(2, 4));
	const [data, setData] = useState(sort(children.props.data));

	// biome-ignore lint/correctness/useExhaustiveDependencies: not sure if sortOrder and sortColumn were intended to be in the dependency array
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
			selectedItems={selectedItems}
			onSelectionChanged={(newSelectedItems: any[]) => {
				setSelectedItems(newSelectedItems);
				action('Selection changed')(newSelectedItems);
			}}
		/>
	);
};

function renderCell(r: any[], c: any) {
	switch (c) {
		case 'dog':
		case 'cat':
			return r[c] ? <Icon name={IconNameSchema.check} /> : <Icon name={IconNameSchema.x} />;
		case 'actions':
			return <Button icon={IconNameSchema.moreHorizontal} type="secondary" />;
		default:
			return r[c];
	}
}

storiesOf('components/Table', module)
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
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				variant="styled"
			/>
		</TableStoryComponent>
	))
	.add('Bordered Table', () => (
		<TableStoryComponent>
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				variant="bordered"
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
	))
	.add('Table clickable row', () => (
		<TableStoryComponent>
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				onRowClick={action('Row clicked')}
			/>
		</TableStoryComponent>
	))
	.add('Table checkboxes', () => (
		<TableStoryComponent>
			<Table
				align
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				showCheckboxes
			/>
		</TableStoryComponent>
	))
	.add('Table icon headers', () => (
		<TableStoryComponent>
			<Table
				align
				columns={COLUMNS_WITH_ICONS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				showCheckboxes
			/>
		</TableStoryComponent>
	))
	.add('Table mobile cards', () => (
		<TableStoryComponent>
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, cell) => renderCell(row, cell)}
				useCards
			/>
		</TableStoryComponent>
	));
