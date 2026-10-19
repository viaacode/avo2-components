import { fireEvent, render, screen } from '@testing-library/react';

import { Accordion } from './Accordion';
import { AccordionActions, AccordionBody, AccordionTitle } from './Accordion.slots';

const customClassName = 'c-custom-accordion';

describe('<Accordion />', () => {
	it('should render', () => {
		render(<Accordion className={customClassName} isOpen />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<Accordion className={customClassName} isOpen />);

		expect(container.firstChild).toHaveClass('c-accordion');
		expect(container.firstChild).not.toHaveClass('c-accordion--closed');
		expect(container.firstChild).toHaveClass(customClassName);
	});

	it('Should render correctly with `isOpen = false`', () => {
		const { container, rerender } = render(<Accordion className={customClassName} isOpen />);

		rerender(
			<Accordion
				className={customClassName}
				isOpen={false}
				onToggle={() => {
					// ignore empty
				}}
			/>
		);

		expect(container.firstChild).toHaveClass('c-accordion--closed');
	});

	it('Should call the `onToggle` prop when clicking the header', () => {
		const onToggleHandler = jest.fn();
		const { container } = render(
			<Accordion className={customClassName} isOpen={false} onToggle={onToggleHandler} />
		);

		const header = container.querySelector('.c-accordion__header') as HTMLElement;
		fireEvent.click(header);

		expect(header).toHaveClass('u-clickable');
		expect(onToggleHandler).toHaveBeenCalled();
		expect(onToggleHandler).toHaveBeenCalledTimes(1);
	});

	it('Should render with slots', () => {
		const titleSlot = 'Title slot';
		const actionsSlot = 'Actions slot';
		const bodySlot = 'Body slot';

		const { container } = render(
			<Accordion>
				<AccordionTitle>{titleSlot}</AccordionTitle>
				<AccordionActions>
					<button type="button">{actionsSlot}</button>
				</AccordionActions>
				<AccordionBody>{bodySlot}</AccordionBody>
			</Accordion>
		);

		expect(container.querySelector('.c-accordion__header-title')).toHaveTextContent(titleSlot);
		expect(screen.getByRole('button', { name: actionsSlot })).toHaveTextContent(actionsSlot);
		expect(container.querySelector('.c-accordion__body .c-accordion__item')).toHaveTextContent(
			bodySlot
		);
	});
});
