import { shallow } from 'enzyme';
import React from 'react';

import { Checkbox, CheckboxState } from './Checkbox';

describe('<Checkbox />', () => {
	it('Should be able to render', () => {
		shallow(<Checkbox label="One" id="one" />);
	});

	it('Should set the correct className', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" />);

		expect(checkboxComponent.hasClass('c-checkbox')).toEqual(true);
	});

	it('Should be able to render with id correctly set', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" />);

		expect(checkboxComponent.find('[type="checkbox"]').prop('id')).toEqual('one');
	});

	it('Should be able to render with label correctly set', () => {
		const checkboxComponent = shallow(<Checkbox label="One" id="one" />);

		expect(checkboxComponent.find('label').html()).toContain('One');
	});

	it('Should be able to render with correct fallback id to label', () => {
		const checkboxComponent = shallow(<Checkbox label="One" />);

		expect(checkboxComponent.find('[type="checkbox"]').prop('id')).toEqual('One');
	});

	it('Should set the defaultChecked-prop as the initial state', () => {
		const checkboxComponentTrue = shallow(<Checkbox label="One" id="one" defaultChecked={true} />);
		const checkboxComponentFalse = shallow(
			<Checkbox label="One" id="one" defaultChecked={false} />
		);

		expect((checkboxComponentTrue.state() as CheckboxState).checked).toEqual(true);
		expect((checkboxComponentFalse.state() as CheckboxState).checked).toEqual(false);
	});

	it('Should have a default value of false for the checked-state', () => {
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
