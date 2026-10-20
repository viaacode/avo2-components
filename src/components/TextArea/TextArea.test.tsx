import { fireEvent, render, screen } from '@testing-library/react';

import { TextArea } from './TextArea';

describe('<TextArea />', () => {
	it('Should be able to render', () => {
		render(<TextArea />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-textarea-custom';

		render(<TextArea className={customClass} />);

		const textAreaElement = screen.getByRole('textbox');

		expect(textAreaElement).toHaveClass(customClass);
		expect(textAreaElement).toHaveClass('c-input');
	});

	it('Should pass on the id', () => {
		const id = 'test';

		render(<TextArea id={id} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('id', id);
	});

	it('Should pass on the name', () => {
		const name = 'test';

		render(<TextArea name={name} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('name', name);
	});

	it('Should be able to set the disabled state', () => {
		render(<TextArea disabled />);

		expect(screen.getByRole('textbox')).toBeDisabled();
	});

	it('Should be able to set the placeholder value', () => {
		const placeholder = 'this is a test placeholder';

		render(<TextArea placeholder={placeholder} />);

		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it('Should be able to set an initial value', () => {
		const value = 'default test value';

		render(<TextArea value={value} />);

		expect(screen.getByRole('textbox')).toHaveValue(value);
	});

	it('Should be able to set the rows for the textarea', () => {
		const rows = 1001;

		render(<TextArea rows={rows} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('rows', String(rows));
	});

	it('Should set the correct classnames for the `height`-prop', () => {
		const { container: small } = render(<TextArea height="small" />);
		const { container: medium } = render(<TextArea height="medium" />);
		const { container: large } = render(<TextArea height="large" />);

		expect(small.firstChild).toHaveClass('c-input--h-small');
		expect(medium.firstChild).toHaveClass('c-input--h-medium');
		expect(large.firstChild).toHaveClass('c-input--h-large');
	});

	it('Should set the correct classnames for the `width`-prop', () => {
		const { container: xsmall } = render(<TextArea width="xsmall" />);
		const { container: small } = render(<TextArea width="small" />);
		const { container: medium } = render(<TextArea width="medium" />);
		const { container: large } = render(<TextArea width="large" />);

		expect(xsmall.firstChild).toHaveClass('c-input--w-xsmall');
		expect(xsmall.firstChild).not.toHaveClass('c-input--w-small');
		expect(xsmall.firstChild).not.toHaveClass('c-input--w-medium');
		expect(xsmall.firstChild).not.toHaveClass('c-input--w-large');
		expect(small.firstChild).toHaveClass('c-input--w-small');
		expect(small.firstChild).not.toHaveClass('c-input--w-xsmall');
		expect(small.firstChild).not.toHaveClass('c-input--w-medium');
		expect(small.firstChild).not.toHaveClass('c-input--w-large');
		expect(medium.firstChild).toHaveClass('c-input--w-medium');
		expect(medium.firstChild).not.toHaveClass('c-input--w-xsmall');
		expect(medium.firstChild).not.toHaveClass('c-input--w-small');
		expect(medium.firstChild).not.toHaveClass('c-input--w-large');
		expect(large.firstChild).toHaveClass('c-input--w-large');
		expect(large.firstChild).not.toHaveClass('c-input--w-xsmall');
		expect(large.firstChild).not.toHaveClass('c-input--w-small');
		expect(large.firstChild).not.toHaveClass('c-input--w-medium');
	});

	it('Should call the onChange handler when the textArea changes', () => {
		const onChangeHandler = jest.fn();

		render(<TextArea onChange={onChangeHandler} />);

		const textAreaElement = screen.getByRole('textbox');

		fireEvent.change(textAreaElement, { target: { value: 'test' } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith('test');

		fireEvent.change(textAreaElement, { target: { value: 'testing' } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith('testing');
	});
});
