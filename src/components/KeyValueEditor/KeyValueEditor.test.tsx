import { mount, shallow } from 'enzyme';
import React from 'react';

import { KeyValueEditor } from './KeyValueEditor';

const dataArray = [
	{
		myKey: 'setting1',
		myValue: 'value1',
		extraValue: 'test',
	},
	{
		myKey: 'setting2',
		myValue: 'value2',
		extraValue: 'test',
	},
	{
		myKey: 'setting3',
		myValue: 'value3',
		extraValue: 'test',
	},
];

const dataObj = {
	setting1: 'value1',
	setting2: 'value2',
	setting3: 'value3',
};

const customClass = 'c-input-custom';

describe('<KeyValueEditor />', () => {
	it('Should be able to render with data array', () => {
		const keyValueEditorComponent = mount(<KeyValueEditor data={dataObj} />);

		const inputElement = keyValueEditorComponent.find('input');

		expect(inputElement.length).toEqual(Object.keys(dataObj).length);
	});

	it('Should be able to render with data object', () => {
		const keyValueEditorComponent = mount(<KeyValueEditor data={dataArray} />);

		const inputElement = keyValueEditorComponent.find('input');

		expect(inputElement.length).toEqual(dataArray.length);
	});

	it('Should set the correct className', () => {
		const keyValueEditorComponent = shallow(
			<KeyValueEditor data={dataObj} className={customClass} />
		);

		expect(keyValueEditorComponent.hasClass(customClass)).toEqual(true);
	});

	it('Should be able to set the readonly state', () => {
		const keyValueEditorComponent = mount(<KeyValueEditor data={dataObj} readonly />);

		const inputElements = keyValueEditorComponent.find('input');
		const spanElements = keyValueEditorComponent.find('.c-keyvalue-label');

		expect(inputElements.length).toEqual(0);
		expect(spanElements.length).toEqual(Object.keys(dataObj).length * 2); // labels and values
	});

	it('Should call the onChange handler when an input triggers an onBlur event', () => {
		const onChange = jest.fn();
		const newValue = 'my new value';

		const keyValueEditorComponent = mount(<KeyValueEditor data={dataObj} onChange={onChange} />);

		expect(onChange).toBeCalledTimes(0);

		const inputElement = keyValueEditorComponent.find('input').at(0);
		inputElement.simulate('change', { target: { value: newValue } });

		inputElement.update();

		inputElement.simulate('blur');

		expect(onChange).toBeCalledTimes(1);

		// enzyme is not coopering :(
		// const changedData = JSON.parse(JSON.stringify(dataObj));
		// changedData.setting1 = newValue;
		// expect(JSON.stringify(onChange.mock.calls[0][0])).toEqual(JSON.stringify(changedData));
	});
});
