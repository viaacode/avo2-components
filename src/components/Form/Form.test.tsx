import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { Form } from './Form';

describe('<Form />', () => {
	it('Should be able to render', () => {
		render(
			<Form>
				<Fragment />
			</Form>
		);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-form-custom';

		const { container } = render(
			<Form className={customClass}>
				<Fragment />
			</Form>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-form-group-layout');
	});

	it('Should set the correct type className', () => {
		const { container: formContainer } = render(
			<Form>
				<Fragment />
			</Form>
		);
		const { container: horizontalFormContainer } = render(
			<Form type="horizontal">
				<Fragment />
			</Form>
		);
		const { container: inlineFormContainer } = render(
			<Form type="inline">
				<Fragment />
			</Form>
		);

		expect(formContainer.firstChild).toHaveClass('o-form-group-layout--standard');
		expect(formContainer.firstChild).not.toHaveClass('o-form-group-layout--horizontal');
		expect(formContainer.firstChild).not.toHaveClass('o-form-group-layout--inline');

		expect(horizontalFormContainer.firstChild).not.toHaveClass('o-form-group-layout--standard');
		expect(horizontalFormContainer.firstChild).toHaveClass('o-form-group-layout--horizontal');
		expect(horizontalFormContainer.firstChild).not.toHaveClass('o-form-group-layout--inline');

		expect(inlineFormContainer.firstChild).not.toHaveClass('o-form-group-layout--standard');
		expect(inlineFormContainer.firstChild).not.toHaveClass('o-form-group-layout--horizontal');
		expect(inlineFormContainer.firstChild).toHaveClass('o-form-group-layout--inline');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Form>
				<div id="form-test">Testing 123</div>
			</Form>
		);

		const testElement = screen.getByText('Testing 123');

		expect(testElement).toHaveAttribute('id', 'form-test');
		expect(container.firstChild?.firstChild).toBe(testElement);
	});
});
