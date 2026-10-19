import { render, screen } from '@testing-library/react';
import { loremIpsum } from 'lorem-ipsum';

import { Flex } from './Flex';

const content = loremIpsum({ count: 1 });
const customClass = 'c-flex-custom';

describe('<Flex />', () => {
	it('Should be able to render', () => {
		render(<Flex>{content}</Flex>);
	});

	it('Should set the correct className', () => {
		const { container } = render(<Flex className={customClass}>{content}</Flex>);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-flex');
	});

	it('Should set the correct className when orientation is passed', () => {
		const { container } = render(<Flex orientation="horizontal">{content}</Flex>);

		expect(container.firstChild).toHaveClass('o-flex--horizontal');
	});

	it('Should set the correct className when center is passed', () => {
		const { container } = render(<Flex center>{content}</Flex>);

		expect(container.firstChild).toHaveClass('o-flex--center');
	});

	it('Should set the correct className when orientation and center are passed', () => {
		const { container } = render(
			<Flex orientation="horizontal" center>
				{content}
			</Flex>
		);

		expect(container.firstChild).toHaveClass('o-flex--horizontal-center');
	});

	it('Should set the correct className when justify is passed', () => {
		const { container } = render(<Flex justify="between">{content}</Flex>);

		expect(container.firstChild).toHaveClass('o-flex--justify-between');
	});

	it('Should set the correct className when wrap is passed', () => {
		const { container } = render(<Flex wrap>{content}</Flex>);

		expect(container.firstChild).toHaveClass('o-flex--wrap');
	});

	it('Should set the correct className when spaced is passed (boolean)', () => {
		const { container } = render(<Flex spaced="regular">{content}</Flex>);

		expect(container.firstChild).toHaveClass('o-flex--spaced');
	});

	it('Should set the correct className when spaced is passed (wide)', () => {
		const { container } = render(<Flex spaced="wide">{content}</Flex>);

		expect(container.firstChild).toHaveClass('o-flex--spaced-wide');
	});

	it('Should set the correct className when no spaced is passed', () => {
		const { container } = render(<Flex>{content}</Flex>);

		expect(container.firstChild).not.toHaveClass('o-flex--spaced');
		expect(container.firstChild).not.toHaveClass('o-flex--spaced-wide');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Flex>
				<p>{content}</p>
			</Flex>
		);

		const paragraph = screen.getByText(content);

		expect(paragraph.tagName).toBe('P');
		expect(container.firstChild).toContainElement(paragraph);
	});
});
