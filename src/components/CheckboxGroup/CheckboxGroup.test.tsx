import { mount, shallow } from 'enzyme';
import React from 'react';

import { Checkbox } from '../..';
import { CheckboxGroup } from './CheckboxGroup';

describe('<CheckboxGroup />', () => {
	it('Should be able to render', () => {
		shallow(
			<CheckboxGroup>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);
	});

	it('Should set the correct className', () => {
		const checkboxGroupComponent = shallow(
			<CheckboxGroup>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);

		expect(checkboxGroupComponent.hasClass('c-checkbox-group')).toEqual(true);
	});

	it('Should correctly pass children', () => {
		const checkboxGroupComponent = mount(
			<CheckboxGroup>
				<Checkbox label="Aluminium" />
				<Checkbox label="Cadmium" />
				<Checkbox label="Dubnium" />
			</CheckboxGroup>
		);

		const checkboxes = checkboxGroupComponent.find('[type="checkbox"]');

		expect(checkboxes).toHaveLength(3);
	});
});
