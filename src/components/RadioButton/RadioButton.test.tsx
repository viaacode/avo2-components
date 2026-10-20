import { fireEvent, render, screen } from '@testing-library/react';

import { RadioButton } from './RadioButton';

describe('<RadioButton />', () => {
	it('Should be able to render', () => {
		render(<RadioButton name="List1" label="One" value="one" />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-radio-custom';

		const { container } = render(
			<RadioButton className={customClass} name="List2" label="One" value="one" />
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-radio');
	});

	it('Should be able to render with id correctly set', () => {
		render(<RadioButton name="List3" label="One" value="one" id="one" />);

		expect(screen.getByRole('radio')).toHaveAttribute('id', 'one');
	});

	it('Should be able to render with name correctly set', () => {
		render(<RadioButton name="List4" label="One" value="one" />);

		expect(screen.getByRole('radio')).toHaveAttribute('name', 'List4');
	});

	it('Should be able to render with label correctly set', () => {
		render(<RadioButton name="List5" label="One" value="one" />);

		expect(screen.getByLabelText('One')).toBe(screen.getByRole('radio'));
	});

	it('Should be able to render without an id', () => {
		render(<RadioButton name="List6" label="One" value="one" />);

		expect(screen.getByRole('radio')).not.toHaveAttribute('id');
	});

	it('Should set the defaultChecked-prop as the initial state', () => {
		const { unmount } = render(<RadioButton name="List7" label="One" value="one" checked={true} />);
		expect(screen.getByRole('radio')).toBeChecked();
		unmount();

		render(<RadioButton name="List7" label="One" value="one" checked={false} />);
		expect(screen.getByRole('radio')).not.toBeChecked();
	});

	it('Should have a default value of false for the checked-state', () => {
		render(<RadioButton name="List8" label="One" value="one" />);

		expect(screen.getByRole('radio')).not.toBeChecked();
	});

	it('Should call `onChange` when toggling radio button', () => {
		const onChangeHandler = jest.fn();

		render(<RadioButton name="List9" label="One" value="one" onChange={onChangeHandler} />);

		fireEvent.click(screen.getByRole('radio'));

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(true);
	});
});
