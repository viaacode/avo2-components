import { fireEvent, render, screen } from '@testing-library/react';

import { DatePicker } from './DatePicker';

describe('<DatePicker />', () => {
	it('Should be able to render', () => {
		render(<DatePicker />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('Should set the correct className', () => {
		const customClass = 'c-datepicker-custom';

		const { container } = render(<DatePicker className={customClass} />);

		const datePickerElement = container.querySelector('.c-input-with-icon-right');

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('avo__c-datepicker');
		expect(datePickerElement?.children.length).toEqual(2);
	});

	it('Should be able to set the disabled state', () => {
		render(<DatePicker disabled />);

		expect(screen.getByRole('textbox')).toBeDisabled();
	});

	it('Should be able to set an initial value', () => {
		const defaultDateString = '2019/06/22';
		const defaultDateObject = new Date(defaultDateString);

		render(<DatePicker value={defaultDateObject} />);

		expect(screen.getByRole('textbox')).toHaveValue(
			defaultDateString.split('/').reverse().join('/')
		);
	});

	it('Should be able to set a placeholder value', () => {
		const placeholder = 'dd-mm-yyyy';

		render(<DatePicker placeholder={placeholder} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
	});

	it('Should call the onChange handler when the input changes', () => {
		const onChangeHandler = jest.fn();

		render(<DatePicker onChange={onChangeHandler} />);

		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: '11/06/2019' } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenLastCalledWith(new Date(2019, 5, 11));

		fireEvent.change(input, { target: { value: '10/05/2018' } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenLastCalledWith(new Date(2018, 4, 10));
	});
});
