import { fireEvent, render, screen } from '@testing-library/react';

import { IconNameSchema } from '../Icon/Icon.types';

import { TextInput } from './TextInput';

const customClass = 'c-input-custom';

describe('<TextInput />', () => {
	it('Should be able to render', () => {
		render(<TextInput />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<TextInput className={customClass} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(screen.getByRole('textbox')).toHaveClass('c-input');
	});

	it('Should pass on the id', () => {
		const id = 'test';

		render(<TextInput id={id} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('id', id);
	});

	it('Should be able to set the disabled state', () => {
		render(<TextInput disabled />);

		expect(screen.getByRole('textbox')).toBeDisabled();
	});

	it('Should be able to set the placeholder value', () => {
		const placeholder = 'this is a test placeholder';

		render(<TextInput placeholder={placeholder} />);

		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it('Should be able to set the type value', () => {
		const type = 'password';

		const { container } = render(<TextInput type={type} />);

		expect(container.querySelector('input')).toHaveAttribute('type', type);
	});

	it('Should be able to set an initial value', () => {
		const value = 'default test value';

		render(<TextInput value={value} />);

		expect(screen.getByRole('textbox')).toHaveValue(value);
	});

	it('Should be able to render with an icon', () => {
		const icon = IconNameSchema.search;

		const { container } = render(<TextInput className={customClass} icon={icon} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.querySelector('.o-svg-icon')).toHaveClass(`o-svg-icon--${icon}`);
	});

	it('Should call the onChange handler when the input changes', () => {
		const onChangeHandler = jest.fn();

		render(<TextInput onChange={onChangeHandler} />);

		const inputElement = screen.getByRole('textbox');

		fireEvent.change(inputElement, { target: { value: 'test' } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith('test');

		fireEvent.change(inputElement, { target: { value: 'testing' } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith('testing');
	});
});
