import { render, screen } from '@testing-library/react';

import { Column } from './Column/Column';
import { Grid } from './Grid';

describe('<Grid />', () => {
	it('Should be able to render', () => {
		render(
			<Grid>
				<Column size="6">Hello</Column>
			</Grid>
		);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-grid-custom';

		const { container } = render(
			<Grid className={customClass}>
				<Column size="6">Hello</Column>
			</Grid>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-grid');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Grid>
				<Column size="6">Hello</Column>
			</Grid>
		);
		const { container: columnContainer } = render(<Column size="6">Hello</Column>);

		expect((container.firstChild as HTMLElement).innerHTML).toEqual(columnContainer.innerHTML);
		expect(screen.getAllByText('Hello')).toHaveLength(2);
	});

	it('Should render with a custom tag', () => {
		const { container } = render(
			<Grid tag="section">
				<Column size="6">Hello</Column>
			</Grid>
		);

		expect(container.querySelectorAll('section')).toHaveLength(1);
		expect((container.firstChild as HTMLElement).tagName).toEqual('SECTION');
	});
});
