import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
	it('Should be able to render', () => {
		render(<Checkbox label="One" checked={false} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-checkbox-custom';

		const { container } = render(<Checkbox className={customClass} label="One" checked={false} />);

		expect(container.firstChild).toHaveClass('c-checkbox');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should correctly render `label`', () => {
		render(<Checkbox label="One" checked={false} />);

		expect(screen.getByLabelText('One')).toBeInTheDocument();
	});

	it('Should correctly render `checked state`', () => {
		render(<Checkbox label="One" checked={true} />);
		render(<Checkbox label="Two" checked={false} />);

		expect(screen.getByLabelText('One')).toBeChecked();
		expect(screen.getByLabelText('Two')).not.toBeChecked();
	});

	it('Should correctly render `id`', () => {
		const id = 'test';

		render(<Checkbox label="One" checked={false} id={id} />);

		expect(screen.getByRole('checkbox')).toHaveAttribute('id', id);
	});

	it('Should be able to render without `id`', () => {
		render(<Checkbox label="One" checked={false} />);

		expect(screen.getByRole('checkbox')).not.toHaveAttribute('id');
	});

	it('Should be able to set the disabled state', () => {
		render(<Checkbox label="One" checked={false} disabled />);

		expect(screen.getByRole('checkbox')).toBeDisabled();
	});

	it('Should call `onChange` when toggling checkbox', () => {
		const onChangeHandler = jest.fn();

		render(<Checkbox label="One" checked={false} id="one" onChange={onChangeHandler} />);

		fireEvent.click(screen.getByRole('checkbox'));

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(true);
	});
});
