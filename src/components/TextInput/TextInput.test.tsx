import { shallow } from 'enzyme';
import React from 'react';

import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import { TextInput } from './TextInput';

const customClass = 'c-input-custom';

describe('<TextInput />', () => {
	it('Should be able to render', () => {
		shallow(<TextInput />);
	});

	it('Should set the correct className', () => {
		const inputComponent = shallow(<TextInput className={customClass} />);

		const inputElement = inputComponent.find('input');

		expect(inputComponent.hasClass(customClass)).toEqual(true);
		expect(inputElement.hasClass('c-input')).toEqual(true);
	});

	it('Should pass on the id', () => {
		const id = 'test';

		const inputComponent = shallow(<TextInput id={id} />);

		const inputElement = inputComponent.find('input');

		expect(inputElement.prop('id')).toEqual(id);
	});

	it('Should be able to set the disabled state', () => {
		const inputComponent = shallow(<TextInput disabled />);

		const inputElement = inputComponent.find('input');

		expect(inputElement.prop('disabled')).toEqual(true);
	});

	it('Should be able to set the placeholder value', () => {
		const placeholder = 'this is a test placeholder';

		const inputComponent = shallow(<TextInput placeholder={placeholder} />);

		const inputElement = inputComponent.find('input');

		expect(inputElement.prop('placeholder')).toEqual(placeholder);
	});

	it('Should be able to set the type value', () => {
		const type = 'password';

		const inputComponent = shallow(<TextInput type={type} />);

		const inputElement = inputComponent.find('input');

		expect(inputElement.prop('type')).toEqual(type);
	});

	it('Should be able to set an initial value', () => {
		const value = 'default test value';

		const inputComponent = shallow(<TextInput value={value} />);

		const inputElement = inputComponent.find('input');

		expect(inputElement.prop('value')).toEqual(value);
	});

	it('Should be able to render with an icon', () => {
		const icon = IconNameSchema.search;

		const inputComponent = shallow(<TextInput className={customClass} icon={icon} />);

		const iconComponent = inputComponent.find(Icon);

		expect(inputComponent.hasClass(customClass)).toEqual(true);
		expect(iconComponent.prop('name')).toEqual(icon);
	});

	it('Should call the onChange handler when the input changes', () => {
		const onChangeHandler = jest.fn();

		const inputComponent = shallow(<TextInput onChange={onChangeHandler} />);

		const inputElement = inputComponent.find('input');

		inputElement.simulate('change', { target: { value: 'test' } });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith('test');

		inputElement.simulate('change', { target: { value: 'testing' } });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith('testing');
	});
});
