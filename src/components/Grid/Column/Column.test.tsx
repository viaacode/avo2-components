import { render, screen } from '@testing-library/react';

import { Column } from './Column';

describe('<Column />', () => {
	it('Should be able to render', () => {
		render(<Column size="6">Hello!</Column>);
	});

	it('should correctly pass a custom className', () => {
		const customClass = 'c-column-custom';

		const { container } = render(
			<Column className={customClass} size="12">
				Hello!
			</Column>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-grid-col-12');
	});

	it('Should correctly set the sizing className', () => {
		const size1 = '12';
		const size2 = '1-4';
		const size3 = '2-11';

		const { container: container1 } = render(<Column size={size1}>Hello!</Column>);
		const { container: container2 } = render(<Column size={size2}>Hello!</Column>);
		const { container: container3 } = render(<Column size={size3}>Hello!</Column>);

		expect(container1.firstChild).toHaveClass('o-grid-col-12');
		expect(container2.firstChild).toHaveClass('o-grid-col-bp1-4');
		expect(container3.firstChild).toHaveClass('o-grid-col-bp2-11');
	});

	it('Should correctly set multiple sizing clasnames', () => {
		const size1 = '12';
		const size2 = '1-4';
		const size3 = '2-11';

		const { container } = render(<Column size={[size1, size2, size3]}>Hello!</Column>);

		expect(container.firstChild).toHaveClass('o-grid-col-12');
		expect(container.firstChild).toHaveClass('o-grid-col-bp1-4');
		expect(container.firstChild).toHaveClass('o-grid-col-bp2-11');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Column size="12">
				<p>Hello!</p>
			</Column>
		);

		const paragraph = screen.getByText('Hello!');

		expect(paragraph.tagName).toBe('P');
		expect(container.firstChild?.firstChild).toBe(paragraph);
	});

	it('Should render with a custom tag', () => {
		const { container } = render(
			<Column size="6" tag="section">
				Hello
			</Column>
		);

		expect(container.querySelectorAll('section')).toHaveLength(1);
		expect((container.firstChild as HTMLElement).tagName).toBe('SECTION');
	});
});
