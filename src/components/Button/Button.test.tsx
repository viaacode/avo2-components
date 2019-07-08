import { shallow } from 'enzyme';
import React from 'react';

import { Icon } from '../Icon/Icon';

import { Button } from './Button';

describe('<Button />', () => {
	it('Should be able to render', () => {
		shallow(<Button ariaLabel="test button" />);
	});

	it('Should set the correct aria label', () => {
		const buttonComponent = shallow(<Button ariaLabel="test button" />);

		expect(buttonComponent.prop('aria-label')).toEqual('test button');
	});

	it('Should set the correct className', () => {
		const buttonComponent = shallow(<Button ariaLabel="test button" />);

		expect(buttonComponent.hasClass('c-button')).toEqual(true);
	});

	it('Should set the correct size className', () => {
		const buttonComponent = shallow(<Button size="small" ariaLabel="test button" />);

		expect(buttonComponent.hasClass('c-button--small')).toEqual(true);
	});

	it('Should set the correct width className when passing block option', () => {
		const buttonDefaultComponent = shallow(<Button ariaLabel="test button" />);
		const buttonBlockTrueComponent = shallow(<Button block={true} ariaLabel="test button" />);
		const buttonBlockFalseComponent = shallow(<Button block={false} ariaLabel="test button" />);

		expect(buttonDefaultComponent.hasClass('c-button--block')).toEqual(false);
		expect(buttonBlockTrueComponent.hasClass('c-button--block')).toEqual(true);
		expect(buttonBlockFalseComponent.hasClass('c-button--block')).toEqual(false);
	});

	it('Should set the correct type className', () => {
		const secondaryButtonComponent = shallow(<Button type="secondary" ariaLabel="test button" />);
		const dangerButtonComponent = shallow(<Button type="danger" ariaLabel="test button" />);
		const linkButtonComponent = shallow(<Button type="link" ariaLabel="test button" />);

		expect(secondaryButtonComponent.hasClass('c-button--secondary')).toEqual(true);
		expect(dangerButtonComponent.hasClass('c-button--danger')).toEqual(true);
		expect(linkButtonComponent.hasClass('c-button--link')).toEqual(true);
	});

	it('Should be able to render a label', () => {
		const label = 'Click me!';
		const buttonComponent = shallow(<Button label={label} ariaLabel="test button" />);

		const labelElement = buttonComponent.find('.c-button__label');

		expect(labelElement).toHaveLength(1);
		expect(labelElement.text()).toEqual(label);
	});

	it('Should not to render a label when none is passed', () => {
		const buttonComponent = shallow(<Button ariaLabel="test button" />);

		const labelElement = buttonComponent.find('.c-button__label');

		expect(labelElement).toHaveLength(0);
	});

	it('Should be able to render a label and an icon', () => {
		const label = 'Click me!';
		const icon = 'search';
		const buttonComponent = shallow(<Button label={label} icon={icon} ariaLabel="test button" />);

		const labelElement = buttonComponent.find('.c-button__label');
		const iconComponent = buttonComponent.find(Icon);

		expect(labelElement).toHaveLength(1);
		expect(labelElement.text()).toEqual(label);
		expect(iconComponent).toHaveLength(1);
		expect(iconComponent.props()).toMatchObject({ name: icon });
	});

	it('Should get a special className when only an icon is passed', () => {
		const buttonComponent = shallow(<Button icon="link" ariaLabel="test button" />);

		expect(buttonComponent.hasClass('c-button--icon')).toEqual(true);
	});

	it('Should be able to render an arrow at the end of the button', () => {
		const buttonComponent = shallow(<Button arrow ariaLabel="test button" />);

		const arrowComponent = buttonComponent.find(Icon);

		expect(arrowComponent).toHaveLength(1);
		expect(arrowComponent.props()).toMatchObject({ name: 'caret-down' });
	});

	it('Should call the `onClick`-handler when clicked', () => {
		const onClickHandler = jest.fn();

		const buttonComponent = shallow(<Button onClick={onClickHandler} ariaLabel="test button" />);

		const buttonElement = buttonComponent.find('button');

		buttonElement.simulate('click');

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);

		buttonElement.simulate('click');

		expect(onClickHandler).toHaveBeenCalledTimes(2);
	});

	it('Should pass on the `disabled`-attribute', () => {
		const buttonComponent = shallow(<Button disabled ariaLabel="test button" />);

		const buttonElement = buttonComponent.find('button');

		expect(buttonElement.prop('disabled')).toEqual(true);
	});

	it('Should set the correct classNames when `active` is passed', () => {
		const buttonComponent = shallow(<Button active={true} ariaLabel="test button" />);

		const buttonElement = buttonComponent.find('button');

		expect(buttonElement.hasClass('c-button-action')).toEqual(true);
		expect(buttonElement.hasClass('active')).toEqual(true);
	});

	it('Should pass on the `active`-prop to the button icon', () => {
		const activeButtonComponent = shallow(
			<Button active={true} icon="heart" ariaLabel="test button" />
		);
		const inactiveButtonComponent = shallow(
			<Button active={false} icon="heart" ariaLabel="test button" />
		);

		const activeIconComponent = activeButtonComponent.find(Icon);
		const inactiveIconComponent = inactiveButtonComponent.find(Icon);

		expect(activeIconComponent.prop('active')).toEqual(true);
		expect(inactiveIconComponent.prop('active')).toEqual(false);
	});
});
