import { fireEvent, render, screen } from '@testing-library/react';
import { AvoSearchOrderDirection } from '@viaa/avo2-types';
import { Button } from '../Button/Button';
import { IconNameSchema } from '../Icon/Icon.types';
import { Table, type TableColumnSchema } from './Table';

const COLUMNS: TableColumnSchema[] = [
	{ id: 'name', label: 'Name', sortable: true },
	{ id: 'age', label: 'Age (in yrs)', sortable: true },
	{ id: 'cat', label: 'Has cat?', col: '2' },
	{ id: 'dog', label: 'Has dog?' },
	{ id: 'actions', label: 'actions' },
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

describe('<Table />', () => {
	it('Should be able to render', () => {
		render(<Table columns={COLUMNS} data={DATA} rowKey="id" />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-table-custom';

		render(<Table align className={customClass} horizontal nowrap striped />);

		const table = screen.getByRole('table');

		expect(table).toHaveClass(customClass);
		expect(table).toHaveClass('c-table');
		expect(table).toHaveClass('c-table--align-middle');
		expect(table).toHaveClass('c-table--horizontal');
		expect(table).toHaveClass('c-table--nowrap');
		expect(table).toHaveClass('c-table--striped');
	});

	it('Should set the correct className for `variant`-prop', () => {
		const { rerender } = render(<Table columns={COLUMNS} data={DATA} rowKey="id" />);

		expect(screen.getByRole('table')).not.toHaveClass('c-table--styled');

		rerender(<Table columns={COLUMNS} data={DATA} rowKey="id" variant="styled" />);
		expect(screen.getByRole('table')).toHaveClass('c-table--styled');

		rerender(<Table columns={COLUMNS} data={DATA} rowKey="id" variant="bordered" />);
		expect(screen.getByRole('table')).toHaveClass('c-table--bordered');
		expect(screen.getByRole('table')).toHaveClass('c-table--styled');

		rerender(<Table columns={COLUMNS} data={DATA} rowKey="id" variant="invisible" />);
		expect(screen.getByRole('table')).toHaveClass('c-table--invisible');
	});

	it('Should be able to render the table head from `columns`', () => {
		render(<Table columns={COLUMNS} data={DATA} rowKey="id" />);

		const headings = screen.getAllByRole('columnheader');

		expect(headings).toHaveLength(COLUMNS.length);
	});

	it('Should render a chevron based on `sortColumn` & `sortOrder` when a column is sortable', () => {
		const { container: ascContainer } = render(
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				sortOrder={AvoSearchOrderDirection.ASC}
				sortColumn={COLUMNS[0].id}
			/>
		);

		const { container: descContainer } = render(
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				sortOrder={AvoSearchOrderDirection.DESC}
				sortColumn={COLUMNS[0].id}
			/>
		);

		const ascHeading = ascContainer.querySelector('thead > tr > th');
		const descHeading = descContainer.querySelector('thead > tr > th');

		expect(ascHeading?.querySelector('.o-svg-icon')).toHaveClass('o-svg-icon--chevron-up');
		expect(descHeading?.querySelector('.o-svg-icon')).toHaveClass('o-svg-icon--chevron-down');
	});

	it('Should set the correct className for a th when col is given', () => {
		const { container } = render(<Table columns={COLUMNS} data={DATA} rowKey="id" />);
		const colSize = 2;

		expect(container.querySelectorAll(`.o-table-col-${colSize}`)).toHaveLength(1);
	});

	it('Should not try to render table head when no `columns` are passed', () => {
		const { container } = render(<Table columns={[]} data={DATA} rowKey="id" />);

		expect(container.querySelector('thead')).not.toBeInTheDocument();
	});

	it('Should be able to render the table body from `data`', () => {
		const { container } = render(<Table columns={COLUMNS} data={DATA} rowKey="id" />);

		const rows = container.querySelectorAll('tbody > tr');

		expect(rows).toHaveLength(DATA.length);
	});

	it('Should not try to render table body when no `data` is passed', () => {
		const { container } = render(<Table columns={COLUMNS} data={[]} rowKey="id" />);

		expect(container.querySelector('tbody')).not.toBeInTheDocument();
	});

	it('Should accept a custom `renderCell`-prop for cell-rendering', () => {
		const { container } = render(
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				renderCell={(row, columnId, rowIndex, columnIndex) => {
					if (columnId === 'actions') {
						return <Button icon={IconNameSchema.moreHorizontal} />;
					}
					return <p className={`${rowIndex}-${columnIndex}`}>{row[columnId]}</p>;
				}}
			/>
		);

		const cells = container.querySelectorAll('tbody > tr > td > p');

		expect(cells[0]).toHaveClass('0-0');
		expect(cells[0]).toHaveTextContent(DATA[0].name);
		expect(cells[4]).toHaveClass('1-0');
		expect(cells[4]).toHaveTextContent(DATA[1].name);
		expect(cells[5]).toHaveClass('1-1');
		expect(cells[5]).toHaveTextContent(DATA[1].age);
	});

	it('Should correctly set the rowKey for each row', () => {
		// React keys are not observable in the DOM; verify rows follow `data` order keyed by `rowKey`
		const key = 'id';
		const { container } = render(
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey={key}
				renderCell={(row, columnId) => (columnId === 'name' ? row.name : null)}
			/>
		);

		const rows = container.querySelectorAll('tbody > tr');

		expect(rows[0]).toHaveTextContent(DATA[0].name);
		expect(rows[2]).toHaveTextContent(DATA[2].name);
		expect(rows[3]).toHaveTextContent(DATA[3].name);
		expect(rows[5]).toHaveTextContent(DATA[5].name);
	});

	it('Should call `onColumnClick` when a sortable column is clicked', () => {
		const onColumnClickHandler = jest.fn();

		render(
			<Table
				columns={COLUMNS}
				data={DATA}
				rowKey="id"
				sortOrder={AvoSearchOrderDirection.ASC}
				sortColumn={COLUMNS[0].id}
				onColumnClick={onColumnClickHandler}
			/>
		);

		fireEvent.click(screen.getAllByRole('columnheader')[0]);

		expect(onColumnClickHandler).toHaveBeenCalled();
		expect(onColumnClickHandler).toHaveBeenCalledTimes(1);
		expect(onColumnClickHandler).toHaveBeenCalledWith(COLUMNS[0].id);
	});

	it('Should not call `onColumnClick` when a non-sortable column is clicked', () => {
		const onColumnClickHandler = jest.fn();

		render(
			<Table columns={COLUMNS} data={DATA} rowKey="id" onColumnClick={onColumnClickHandler} />
		);

		const headings = screen.getAllByRole('columnheader');
		fireEvent.click(headings[headings.length - 1]);

		expect(onColumnClickHandler).toHaveBeenCalledTimes(0);
	});

	it('Should render an `emptyStateMessage` when no data is passed', () => {
		const emptyStateMessage = 'No data test test no data...';

		const { container } = render(
			<Table columns={COLUMNS} data={[]} rowKey="id" emptyStateMessage={emptyStateMessage} />
		);

		const emptyStateParagraph = container.querySelector('div.u-spacer-left-s.u-spacer-top');

		expect(emptyStateParagraph).toHaveTextContent(emptyStateMessage);
	});

	it('Should not render an `emptyStateMessage` when data is passed', () => {
		const emptyStateMessage = 'No data test test no data...';

		render(
			<Table columns={COLUMNS} data={DATA} rowKey="id" emptyStateMessage={emptyStateMessage} />
		);

		expect(screen.queryByText(emptyStateMessage)).not.toBeInTheDocument();
	});

	it('Should not render an `emptyStateMessage` when it was not passed', () => {
		const { container } = render(<Table columns={COLUMNS} data={[]} rowKey="id" />);

		expect(container.querySelector('.u-spacer-top')).not.toBeInTheDocument();
	});
});
