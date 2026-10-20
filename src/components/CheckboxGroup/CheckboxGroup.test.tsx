import { render, screen } from '@testing-library/react';

import { Checkbox } from '../Checkbox/Checkbox';

import { CheckboxGroup } from './CheckboxGroup';

describe('<CheckboxGroup />', () => {
	it('Should be able to render', () => {
		render(
			<CheckboxGroup>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-checkbox-group-custom';

		const { container } = render(
			<CheckboxGroup className={customClass}>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);

		expect(container.firstChild).toHaveClass('c-checkbox-group');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should set the correct className when passing inline option', () => {
		const { container: defaultContainer } = render(
			<CheckboxGroup>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);
		const { container: inlineTrueContainer } = render(
			<CheckboxGroup inline={true}>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);
		const { container: inlineFalseContainer } = render(
			<CheckboxGroup inline={false}>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);

		expect(defaultContainer.firstChild).not.toHaveClass('c-checkbox-group--inline');
		expect(inlineTrueContainer.firstChild).toHaveClass('c-checkbox-group--inline');
		expect(inlineFalseContainer.firstChild).not.toHaveClass('c-checkbox-group--inline');
	});

	it('Should correctly pass children', () => {
		render(
			<CheckboxGroup>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);

		expect(screen.getAllByRole('checkbox')).toHaveLength(3);
	});
});
