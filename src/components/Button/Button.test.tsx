import { fireEvent, render, screen } from '@testing-library/react';

import { IconNameSchema } from '../Icon/Icon.types';

import { Button } from './Button';

describe('<Button />', () => {
	it('Should be able to render', () => {
		render(<Button ariaLabel="test button" />);
	});

	it('Should set the correct aria label', () => {
		render(<Button ariaLabel="test button" />);

		expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'test button');
	});

	it('Should set the correct className', () => {
		const customClass = 'c-button-custom';
		render(<Button className={customClass} ariaLabel="test button" />);

		expect(screen.getByRole('button')).toHaveClass('c-button');
		expect(screen.getByRole('button')).toHaveClass(customClass);
	});

	it('Should set the correct size className', () => {
		render(<Button size="small" ariaLabel="test button" />);

		expect(screen.getByRole('button')).toHaveClass('c-button--small');
	});

	it('Should set the correct width className when passing block option', () => {
		const { container: defaultContainer } = render(<Button ariaLabel="test button" />);
		const { container: blockTrueContainer } = render(
			<Button block={true} ariaLabel="test button" />
		);
		const { container: blockFalseContainer } = render(
			<Button block={false} ariaLabel="test button" />
		);

		expect(defaultContainer.firstChild).not.toHaveClass('c-button--block');
		expect(blockTrueContainer.firstChild).toHaveClass('c-button--block');
		expect(blockFalseContainer.firstChild).not.toHaveClass('c-button--block');
	});

	it('Should set the correct type className', () => {
		const { container: secondaryContainer } = render(
			<Button type="secondary" ariaLabel="test button" />
		);
		const { container: dangerContainer } = render(<Button type="danger" ariaLabel="test button" />);
		const { container: linkContainer } = render(<Button type="link" ariaLabel="test button" />);
		const { container: inlineLinkContainer } = render(
			<Button type="inline-link" ariaLabel="test button" />
		);

		expect(secondaryContainer.firstChild).toHaveClass('c-button--secondary');
		expect(dangerContainer.firstChild).toHaveClass('c-button--danger');
		expect(linkContainer.firstChild).toHaveClass('c-button--link');
		expect(inlineLinkContainer.firstChild).toHaveClass('c-button--inline-link');
	});

	it('Should set the correct className when passing autoHeight option', () => {
		render(<Button autoHeight />);

		expect(screen.getByRole('button')).toHaveClass('c-button--auto');
	});

	it('Should be able to render a label', () => {
		const label = 'Click me!';
		const { container } = render(<Button label={label} ariaLabel="test button" />);

		const labelElements = container.querySelectorAll('.c-button__label');

		expect(labelElements).toHaveLength(1);
		expect(labelElements[0]).toHaveTextContent(label);
	});

	it('Should not to render a label when none is passed', () => {
		const { container } = render(<Button ariaLabel="test button" />);

		expect(container.querySelectorAll('.c-button__label')).toHaveLength(0);
	});

	it('Should be able to render a label and an icon', () => {
		const label = 'Click me!';
		const icon = IconNameSchema.search;
		const { container } = render(<Button label={label} icon={icon} ariaLabel="test button" />);

		const labelElements = container.querySelectorAll('.c-button__label');
		const iconElements = container.querySelectorAll('.c-button__icon');

		expect(labelElements).toHaveLength(1);
		expect(labelElements[0]).toHaveTextContent(label);
		expect(iconElements).toHaveLength(1);
		expect(iconElements[0]).toHaveClass(`o-svg-icon--${icon}`);
	});

	it('Should get a special className when only an icon is passed', () => {
		render(<Button icon={IconNameSchema.link} ariaLabel="test button" />);

		expect(screen.getByRole('button')).toHaveClass('c-button--icon');
	});

	it('Should be able to render an arrow at the end of the button', () => {
		const { container } = render(<Button arrow ariaLabel="test button" />);

		const arrowElements = container.querySelectorAll('.c-button__icon');

		expect(arrowElements).toHaveLength(1);
		expect(arrowElements[0]).toHaveClass('o-svg-icon--caret-down');
	});

	it('Should call the `onClick`-handler when clicked', () => {
		const onClickHandler = jest.fn();

		render(<Button onClick={onClickHandler} ariaLabel="test button" />);

		const buttonElement = screen.getByRole('button');

		fireEvent.click(buttonElement);

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);

		fireEvent.click(buttonElement);

		expect(onClickHandler).toHaveBeenCalledTimes(2);
	});

	it('Should pass on the `disabled`-attribute', () => {
		render(<Button disabled ariaLabel="test button" />);

		expect(screen.getByRole('button')).toBeDisabled();
	});

	it('Should set the correct classnames when `active` is passed', () => {
		render(<Button active={true} ariaLabel="test button" />);

		expect(screen.getByRole('button')).toHaveClass('c-button--active');
	});

	it('Should pass on the title attribute', () => {
		const testTitle = 'test title';
		render(<Button title={testTitle} />);

		expect(screen.getByRole('button')).toHaveAttribute('title', testTitle);
	});

	it('Should pass on the `active`-prop to the button icon', () => {
		const { container: activeContainer } = render(
			<Button active={true} icon={IconNameSchema.heart} ariaLabel="test button" />
		);
		const { container: inactiveContainer } = render(
			<Button active={false} icon={IconNameSchema.heart} ariaLabel="test button" />
		);

		expect(activeContainer.querySelector('.c-button__icon')).toHaveClass(
			'o-svg-icon--action-active'
		);
		expect(inactiveContainer.querySelector('.c-button__icon')).not.toHaveClass(
			'o-svg-icon--action-active'
		);
	});
});
