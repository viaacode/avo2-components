import { mount, shallow } from 'enzyme';
import React from 'react';

import { Select } from './Select';

const customClass = 'c-select-custom';
const options = [
	{ label: 'Aluminium', value: 'Al' },
	{ label: 'Cadmium', value: 'Cd' },
	{ label: 'Dubnium', value: 'Db' },
	{ label: 'Potassium', value: 'K' },
	{ label: 'Vanadium', value: 'V' },
	{ label: 'Palladium', value: 'Pd' },
	{ label: 'Polonium', value: 'Po' },
	{ label: 'Rhodium', value: 'Rh' },
	{ label: 'Yttrium', value: 'Y' },
	{ label: 'Uranium', value: 'U', disabled: true },
];

describe('<Select />', () => {
	it('Should be able to render', () => {
		shallow(<Select options={options} />);
	});

	it('Should set the correct className', () => {
		const selectComponent = mount(<Select className={customClass} options={options} />);

		const selectElement = selectComponent.find('div').at(0);

		expect(selectElement.hasClass(customClass)).toEqual(true);
		expect(selectElement.hasClass('c-select')).toEqual(true);
	});

	it('Should correctly render the given options', () => {
		const selectComponent = shallow(<Select options={options} />);

		const optionElements = selectComponent.find('option');

		optionElements.forEach((optionElement, index) => {
			expect(optionElement.prop('value')).toEqual(options[index].value);
			expect(optionElement.text()).toEqual(options[index].label);
			expect(optionElement.prop('disabled')).toEqual(options[index].disabled);
		});
	});

	it('Should be able to set the disabled state', () => {
		const selectComponent = mount(<Select options={options} disabled />);

		const selectElement = selectComponent.find('div').at(0);

		expect(selectElement.hasClass('c-select--is-disabled')).toEqual(true);
	});
});
