import { shallow } from 'enzyme';
import React from 'react';

import { RadioButton } from './RadioButton';

describe('<RadioButton />', () => {
	it('Should be able to render', () => {
		shallow(<RadioButton name="List1" label="One" />);
	});

	it('Should set the correct className', () => {
		const radioButtonComponent = shallow(<RadioButton name="List2" label="One" />);

		expect(radioButtonComponent.hasClass('c-radio')).toEqual(true);
	});
});
