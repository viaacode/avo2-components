import { shallow } from 'enzyme';
import React from 'react';

import { RadioButtonGroup } from './RadioButtonGroup';
import { RADIO_BUTTON_OPTIONS } from './RadioButtonGroup.mock';

describe('<RadioButtonGroup />', () => {
	it('Should be able to render', () => {
		shallow(<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={() => {}} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-column-custom';

		const radioButtonGroupComponent = shallow(
			<RadioButtonGroup
				className={customClass}
				options={RADIO_BUTTON_OPTIONS}
				value={''}
				onChange={() => {}}
			/>
		);

		expect(radioButtonGroupComponent.hasClass(customClass)).toEqual(true);
		expect(radioButtonGroupComponent.hasClass('c-radio-group')).toEqual(true);
	});

	it('Should set the correct inline className', () => {
		const radioButtonGroupComponent = shallow(
			<RadioButtonGroup
				options={RADIO_BUTTON_OPTIONS}
				value={''}
				onChange={() => {}}
				inline
			/>
		);

		expect(radioButtonGroupComponent.hasClass('c-radio-group--inline')).toEqual(true);
	});
});
