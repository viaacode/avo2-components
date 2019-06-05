import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { shallow } from 'enzyme';
import React from 'react';
import { DatePicker } from './DatePicker';

dayjs.extend(customParseFormat);

const EXAMPLE_DATE = new Date(2005, 5, 23);
const EXAMPLE_DATE_STRING = dayjs(EXAMPLE_DATE).format('DD/MM/YYYY');

describe('<DatePicker />', () => {
	it('Should be able to render', () => {
		shallow(<DatePicker id="first" />);
	});

	it('Should set the correct className', () => {
		const datePickerComponent = shallow(<DatePicker id="second" />);

		const datePickerElement = datePickerComponent.find('input');

		expect(datePickerElement.hasClass('c-input')).toEqual(true);
	});

	it('Should pass on the id', () => {
		const id = 'test';

		const datePickerComponent = shallow(<DatePicker id={id} />);

		const datePickerElement = datePickerComponent.find('input');

		expect(datePickerElement.prop('id')).toEqual(id);
	});

	it('Should be able to set the disabled state', () => {
		const datePickerComponent = shallow(<DatePicker id="fourth" disabled />);

		const datePickerElement = datePickerComponent.find('input');

		expect(datePickerElement.prop('disabled')).toEqual(true);
	});

	it('Should be able to set an initial value', () => {
		const datePickerComponent = shallow(
			<DatePicker id="sixth" defaultValue={EXAMPLE_DATE_STRING} />
		);

		expect(dayjs(datePickerComponent.state('date')).format('DD/MM/YYYY')).toEqual(
			EXAMPLE_DATE_STRING
		);
	});

	it('Should call the onChange handler when the input changes', () => {
		const onChangeHandler = jest.fn();

		const datePickerComponent = shallow(<DatePicker id="seventh" onChange={onChangeHandler} />);

		const datePickerElement = datePickerComponent.find('input');

		datePickerElement.simulate('change', { target: { value: EXAMPLE_DATE_STRING } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler.mock.calls[0][0]).toBeDefined();
		console.log('date: ', onChangeHandler.mock.calls[0][0]);
		expect(dayjs(onChangeHandler.mock.calls[0][0]).format('DD/MM/YYYY')).toEqual(
			EXAMPLE_DATE_STRING
		);
		expect(onChangeHandler.mock.calls[0][1]).toEqual('seventh');

		datePickerElement.simulate('change', { target: { value: EXAMPLE_DATE_STRING } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler.mock.calls[0][0]).toBeDefined();
		expect(dayjs(onChangeHandler.mock.calls[0][0]).format('DD/MM/YYYY')).toEqual(
			EXAMPLE_DATE_STRING
		);
		expect(onChangeHandler.mock.calls[0][1]).toEqual('seventh');
	});

	it('Should set today as default value if no default is passed', () => {
		const datePickerComponent = shallow(<DatePicker id="eight" />);

		expect(dayjs(datePickerComponent.state('date')).format('DD/MM/YYYY')).toEqual(
			dayjs().format('DD/MM/YYYY')
		);
	});
});
