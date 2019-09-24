import { mount, shallow } from 'enzyme';
import React from 'react';

import { DateTimePicker } from './DateTimePicker';

describe('<DateTimePicker />', () => {
	it('Should be able to render', () => {
		shallow(<DateTimePicker onChange={() => {}} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-DateTimePicker-custom';

		const DateTimePickerComponent = shallow(
			<DateTimePicker className={customClass} onChange={() => {}} />
		);

		expect(DateTimePickerComponent.hasClass(customClass)).toEqual(true);
	});

	it('Should pass on the id', () => {
		const id = 'test';

		const DateTimePickerComponent = shallow(<DateTimePicker id={id} onChange={() => {}} />);

		const DatePickerElement = DateTimePickerComponent.find('input').at(0);
		const TimePickerElement = DateTimePickerComponent.find('input').at(1);

		expect(DatePickerElement.prop('id')).toEqual(`${id}-date`);
		expect(TimePickerElement.prop('id')).toEqual(`${id}-time`);
	});

	it('Should be able to set the disabled state', () => {
		const DateTimePickerComponent = mount(<DateTimePicker disabled onChange={() => {}} />);

		const DatePickerElement = DateTimePickerComponent.find('input').at(0);
		const TimePickerElement = DateTimePickerComponent.find('input').at(1);

		expect(DatePickerElement.prop('disabled')).toEqual(true);
		expect(TimePickerElement.prop('disabled')).toEqual(true);
	});

	it('Should be able to set an initial value', () => {
		const defaultDateString = '2019-06-11 12:37';
		const defaultDateObject = new Date(defaultDateString);

		const DateTimePickerComponent = shallow(
			<DateTimePicker value={defaultDateObject} onChange={() => {}} />
		);

		const DatePickerElement = DateTimePickerComponent.find('input').at(0);
		const TimePickerElement = DateTimePickerComponent.find('input').at(1);

		expect(DatePickerElement.prop('value')).toEqual(defaultDateString.split(' ')[0]);
		expect(TimePickerElement.prop('value')).toEqual(defaultDateString.split(' ')[1]);
	});

	it('Should call the onChange handler when the input changes', () => {
		const onChangeHandler = jest.fn();

		const DateTimePickerComponent = shallow(<DateTimePicker onChange={onChangeHandler} />);

		const DatePickerElement = DateTimePickerComponent.find('input').at(0);
		const TimePickerElement = DateTimePickerComponent.find('input').at(1);

		const date1 = '2019-06-11';
		const date2 = '2018-05-10';
		const time1 = '12:07';
		const time2 = '13:08';
		const dateObject1 = new Date(`${date1} ${time1}`);
		const dateObject2 = new Date(`${date2} ${time2}`);

		DatePickerElement.simulate('change', { target: { value: dateObject1 } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(dateObject1);

		DatePickerElement.simulate('change', { target: { value: dateObject2 } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith(dateObject2);

		TimePickerElement.simulate('change', { target: { value: time1 } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(dateObject1);

		TimePickerElement.simulate('change', { target: { value: time2 } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith(dateObject2);
	});
});
