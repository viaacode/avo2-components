import { render, screen } from '@testing-library/react';

import { FlexItem } from './FlexItem';

describe('<Flex />', () => {
	it('Should be able to render', () => {
		render(<FlexItem />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-flex-item-custom';

		const { container } = render(<FlexItem className={customClass} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-flex__item');
	});

	it('Should set the correct className when shrink is passed (string)', () => {
		const { container } = render(<FlexItem shrink />);

		expect(container.firstChild).toHaveClass('o-flex__item--shrink');
	});

	it('Should not set the shrink className when shrink is not passed', () => {
		const { container } = render(<FlexItem />);

		expect(container.firstChild).toHaveClass('o-flex__item');
		expect(container.firstChild).not.toHaveClass('o-flex__item--shrink');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<FlexItem>
				<p>What a nice smile you have there!</p>
			</FlexItem>
		);

		const paragraph = screen.getByText('What a nice smile you have there!');

		expect(paragraph.tagName).toBe('P');
		expect(container.firstChild).toContainElement(paragraph);
	});
});
