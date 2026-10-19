import { fireEvent, render, screen } from '@testing-library/react';

import { IconNameSchema } from '../Icon/Icon.types';

import { ToggleButton } from './ToggleButton';

describe('<ToggleButton ariaLabel="test button" />', () => {
	it('Should be able to render', () => {
		render(<ToggleButton ariaLabel="test button" icon={IconNameSchema.heart} active={false} />);
	});

	it('should correctly pass a custom className', () => {
		const customClass = 'c-toggle-button-custom';

		render(
			<ToggleButton
				ariaLabel="test button"
				className={customClass}
				icon={IconNameSchema.heart}
				active={false}
			/>
		);

		expect(screen.getByRole('button')).toHaveClass(customClass);
	});

	it('Should set aria label', () => {
		const { rerender } = render(
			<ToggleButton ariaLabel="toggle favorite" icon={IconNameSchema.heart} active={false} />
		);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-label',
			'toggle favorite (currently not active)'
		);

		rerender(<ToggleButton ariaLabel="toggle favorite" icon={IconNameSchema.heart} active={true} />);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-label',
			'toggle favorite (currently active)'
		);
	});

	it('Should set title tooltip', () => {
		render(
			<ToggleButton
				title="toggle favorite"
				ariaLabel="toggle favorite"
				icon={IconNameSchema.heart}
				active={false}
			/>
		);

		expect(screen.getByRole('button')).toHaveAttribute('title', 'toggle favorite');
	});

	it('Should set the normal version of the icon when not `active`', () => {
		const { container } = render(
			<ToggleButton ariaLabel="test button" icon={IconNameSchema.bookmark} active={false} />
		);

		expect(container.querySelector('.o-svg-icon--bookmark')).toBeInTheDocument();
		expect(container.querySelector('.o-svg-icon--bookmark-filled')).not.toBeInTheDocument();
	});

	it('Should set the filled version of the icon when `active`', () => {
		const { container } = render(
			<ToggleButton ariaLabel="test button" icon={IconNameSchema.bookmark} active={true} />
		);

		expect(container.querySelector('.o-svg-icon--bookmark-filled')).toBeInTheDocument();
	});

	it('Should call the `onClick`-handler when clicked', () => {
		const onClickHandler = jest.fn();

		const active = true;

		render(
			<ToggleButton
				ariaLabel="test button"
				icon={IconNameSchema.bookmark}
				active={active}
				onClick={onClickHandler}
			/>
		);

		const buttonElement = screen.getByRole('button');

		fireEvent.click(buttonElement);

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);
		expect(onClickHandler).toHaveBeenCalledWith(!active);

		fireEvent.click(buttonElement);

		expect(onClickHandler).toHaveBeenCalledTimes(2);
		expect(onClickHandler).toHaveBeenCalledWith(active);
	});
});
