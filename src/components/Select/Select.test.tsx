import { fireEvent, render, screen } from '@testing-library/react';

import { Select } from './Select';
import { SELECT_MOCK_OPTIONS } from './Select.mock';

const customClass = 'c-select-custom';

describe('<Select />', () => {
	it('Should be able to render', () => {
		render(<Select options={SELECT_MOCK_OPTIONS} />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<Select className={customClass} options={SELECT_MOCK_OPTIONS} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-select');
	});

	it('Should correctly render the given options', () => {
		render(<Select options={SELECT_MOCK_OPTIONS} />);

		// open the react-select menu so the options are rendered
		fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' });

		const optionElements = screen.getAllByRole('option');

		expect(optionElements).toHaveLength(SELECT_MOCK_OPTIONS.length);
		optionElements.forEach((optionElement, index) => {
			expect(optionElement).toHaveTextContent(SELECT_MOCK_OPTIONS[index].label);
			expect(optionElement).toHaveAttribute(
				'aria-disabled',
				String(!!SELECT_MOCK_OPTIONS[index].disabled)
			);
		});
	});

	it('Should be able to set the disabled state', () => {
		const { container } = render(<Select options={SELECT_MOCK_OPTIONS} disabled />);

		expect(container.firstChild).toHaveClass('c-select--is-disabled');
	});
});
