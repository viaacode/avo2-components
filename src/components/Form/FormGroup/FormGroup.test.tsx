import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { FormGroup } from './FormGroup';

describe('<FormGroup />', () => {
	it('Should be able to render', () => {
		render(
			<FormGroup>
				<Fragment />
			</FormGroup>
		);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-form-group-custom';

		const { container } = render(
			<FormGroup className={customClass}>
				<Fragment />
			</FormGroup>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-form-group');
	});

	it('Should render a label when it is passed', () => {
		const id = 'test';
		const label = 'test form';

		const { container } = render(
			<FormGroup labelFor={id} label={label}>
				<Fragment />
			</FormGroup>
		);

		const labelElement = container.querySelector('label.o-form-group__label');

		expect(labelElement).toHaveAttribute('for', id);
		expect(labelElement).toHaveTextContent(label, { normalizeWhitespace: false });
		expect(labelElement?.textContent).toEqual(label);
	});

	it('Should not render a label when none is passed', () => {
		const { container } = render(
			<FormGroup>
				<Fragment />
			</FormGroup>
		);

		expect(container.firstChild).toHaveClass('o-form-group');
		expect(container.querySelector('.o-form-group__controls')).toBeInTheDocument();
		expect(container.querySelector('label.o-form-group__label')).not.toBeInTheDocument();
	});

	it('Should set className and render an error when it is passed', () => {
		const error = 'Field is invalid.';

		const { container } = render(
			<FormGroup error={error}>
				<Fragment />
			</FormGroup>
		);

		const errorElement = container.querySelector('.c-form-help-text--error');

		expect(container.firstChild).toHaveClass('o-form-group--error');
		expect(errorElement).toBeInTheDocument();
		expect((errorElement as HTMLElement).textContent).toEqual('Field is invalid.');
	});

	it('Should set className and render multiple errors when they are passed', () => {
		const error = ['Field is invalid.', 'Field is very invalid.'];

		const { container } = render(
			<FormGroup error={error}>
				<Fragment />
			</FormGroup>
		);

		expect(container.querySelectorAll('.c-form-help-text--error')).toHaveLength(2);
	});

	it('Should add correct inlineMode class', () => {
		const { container: defaultContainer } = render(
			<FormGroup>
				<Fragment />
			</FormGroup>
		);
		const { container: growContainer } = render(
			<FormGroup inlineMode="grow">
				<Fragment />
			</FormGroup>
		);
		const { container: shrinkContainer } = render(
			<FormGroup inlineMode="shrink">
				<Fragment />
			</FormGroup>
		);

		expect(defaultContainer.firstChild).not.toHaveClass('o-form-group--inline-grow');
		expect(defaultContainer.firstChild).not.toHaveClass('o-form-group--inline-shrink');

		expect(growContainer.firstChild).toHaveClass('o-form-group--inline-grow');
		expect(growContainer.firstChild).not.toHaveClass('o-form-group--inline-shrink');

		expect(shrinkContainer.firstChild).not.toHaveClass('o-form-group--inline-grow');
		expect(shrinkContainer.firstChild).toHaveClass('o-form-group--inline-shrink');
	});

	it('Should not set className and not render an error when none is passed', () => {
		const { container } = render(
			<FormGroup>
				<Fragment />
			</FormGroup>
		);

		expect(container.firstChild).not.toHaveClass('o-form-group--error');
		expect(container.querySelectorAll('.c-form-help-text--error')).toHaveLength(0);
	});

	it('Should correctly pass children', () => {
		render(
			<FormGroup>
				<input type="text" id="test" />
			</FormGroup>
		);

		expect(screen.getByRole('textbox')).toHaveAttribute('id', 'test');
	});
});
