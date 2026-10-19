import { fireEvent, render, screen } from '@testing-library/react';

import { Toggle } from './Toggle';

describe('<Toggle />', () => {
	it('Should be able to render', () => {
		render(<Toggle checked={false} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-toggle-custom';

		const { container } = render(<Toggle className={customClass} checked={false} />);

		expect(container.firstChild).toHaveClass('c-toggle');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should correctly render `checked state`', () => {
		const { unmount } = render(<Toggle checked={true} />);
		expect(screen.getByRole('checkbox')).toBeChecked();
		unmount();

		render(<Toggle checked={false} />);
		expect(screen.getByRole('checkbox')).not.toBeChecked();
	});

	it('Should correctly render `id`', () => {
		const id = 'test';

		render(<Toggle checked={false} id={id} />);

		expect(screen.getByRole('checkbox')).toHaveAttribute('id', id);
	});

	it('Should be able to render without `id`', () => {
		render(<Toggle checked={false} />);

		expect(screen.getByRole('checkbox')).not.toHaveAttribute('id');
	});

	it('Should be able to set the disabled state', () => {
		render(<Toggle checked={false} disabled />);

		expect(screen.getByRole('checkbox')).toBeDisabled();
	});

	it('Should call `onChange` when toggling toggle', () => {
		const onChangeHandler = jest.fn();

		render(<Toggle checked={false} id="one" onChange={onChangeHandler} />);

		fireEvent.click(screen.getByRole('checkbox'));

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(true);
	});
});
