import { shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { Checkbox, CheckboxState } from './Checkbox';

describe('<Checkbox />', () => {
	it('Should be able to render', () => {
		shallow(<Checkbox label="One" id="one" />);
	});

	it('Should set the correct className', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" />);

		expect(checkboxComponent.hasClass('c-checkbox')).toEqual(true);
	});

	it('Should be able to render with checked=true option', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" defaultChecked={true} />);
		expect((checkboxComponent.state() as CheckboxState).checked).toEqual(true);
	});

	it('Should be able to render with checked=false option', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" defaultChecked={false} />);
		expect((checkboxComponent.state() as CheckboxState).checked).toEqual(false);
	});

	it('Should be able to render without checked option', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" />);
		expect((checkboxComponent.state() as CheckboxState).checked).toEqual(false);
	});

	it('Should call `onChanged` when toggling checkbox', () => {
		const onChangedHandler = jest.fn();

		const checkboxComponent = shallow(
			<Checkbox label="One" id="one" onChanged={onChangedHandler} />
		);

		checkboxComponent.simulate('click');

		expect(onChangedHandler).toHaveBeenCalled();
		expect(onChangedHandler).toHaveBeenCalledTimes(1);
		expect(onChangedHandler).toHaveBeenCalledWith(true, 'one');

		checkboxComponent.simulate('click');

		expect(onChangedHandler).toHaveBeenCalled();
		expect(onChangedHandler).toHaveBeenCalledTimes(2);
		expect(onChangedHandler).toHaveBeenCalledWith(false, 'one');
	});
});
