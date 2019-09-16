import { mount, shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';
import { DropdownButton, DropdownContent } from './Dropdown.slots';

const renderDropdownChildren = () => (
	<>
		<div>OneOneOneOneOneOne</div>
		<div>Two</div>
		<div>Three</div>
		<div>Four</div>
		<div>Five</div>
	</>
);

describe('<Dropdown />', () => {
	it('Should be able to render', () => {
		shallow(
			<Dropdown label="Show options" isOpen={false}>
				{renderDropdownChildren()}
			</Dropdown>
		);
	});

	it('Should render correctly with `isOpen = false`', () => {
		const dropdownComponent = shallow(
			<Dropdown label="Show options" isOpen={false}>
				{renderDropdownChildren()}
			</Dropdown>
		);

		expect(dropdownComponent.find('.c-menu')).toHaveLength(0);
	});

	it('Should render correctly with `isOpen = true`', () => {
		const dropdownComponent = mount(
			<Dropdown label="Show options" isOpen={true}>
				{renderDropdownChildren()}
			</Dropdown>
		);

		expect(dropdownComponent.find('.c-menu')).toHaveLength(1);
		expect(dropdownComponent.find('.c-menu--visible')).toHaveLength(1);
	});

	it('Should call `onOpen` when clicking the button (and `isOpen = false`)', () => {
		const onOpenHandler = jest.fn();

		const dropdownComponent = mount(
			<Dropdown label="Show options" isOpen={false} onOpen={onOpenHandler}>
				{renderDropdownChildren()}
			</Dropdown>
		);

		dropdownComponent
			.find('button')
			.first()
			.simulate('click');

		expect(onOpenHandler).toHaveBeenCalled();
		expect(onOpenHandler).toHaveBeenCalledTimes(1);
	});

	it('Should call `onClose` when clicking the button (and `isOpen = true`)', () => {
		const onCloseHandler = jest.fn();

		const dropdownComponent = mount(
			<Dropdown label="Show options" isOpen={true} onClose={onCloseHandler}>
				{renderDropdownChildren()}
			</Dropdown>
		);

		dropdownComponent
			.find('button')
			.first()
			.simulate('click');

		expect(onCloseHandler).toHaveBeenCalled();
		expect(onCloseHandler).toHaveBeenCalledTimes(1);
	});

	it('Should set the correct className for button', () => {
		const customClass = 'c-dropdown-custom';

		const dropdownComponent = mount(
			<Dropdown className={customClass} label="Show options" isOpen={false}>
				{renderDropdownChildren()}
			</Dropdown>
		);
		const dropdownTriggerContainer = dropdownComponent.find('div').first();
		const dropdownTriggerButton = dropdownTriggerContainer.find('button');

		expect(dropdownTriggerButton.hasClass('c-button')).toBeTruthy();
		expect(dropdownTriggerContainer.hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass `label`', () => {
		const label = 'Test label';

		const dropdownComponent = mount(
			<Dropdown label={label} isOpen={false}>
				{renderDropdownChildren()}
			</Dropdown>
		);

		expect(dropdownComponent.find('.c-button__label').text()).toEqual(label);
	});

	it('Should correctly render slots', () => {
		const label = 'Test label';

		const dropdownComponent = mount(
			<Dropdown isOpen={false}>
				<DropdownButton>
					<Button label={label} />
				</DropdownButton>
				<DropdownContent>
					<Fragment>
						<div className="firstItem">OneOneOneOneOneOne</div>
						<div>Two</div>
						<div>Three</div>
						<div>Four</div>
						<div>Five</div>
					</Fragment>
				</DropdownContent>
			</Dropdown>
		);

		expect(dropdownComponent.find('.c-button__label').text()).toEqual(label);
		expect(dropdownComponent.find('.firstItem').text()).toEqual('OneOneOneOneOneOne');
	});

	it('Should render correctly with `autoSize = true`', () => {
		const dropdownComponent = mount(
			<Dropdown autoSize label="Show options" isOpen={false}>
				{renderDropdownChildren()}
			</Dropdown>
		);
		const dropdownTriggerContainer = dropdownComponent.find('div').first();
		const dropdownContent = dropdownComponent.find('.c-dropdown__menu');

		expect(dropdownTriggerContainer.hasClass('c-dropdown__trigger')).toBeTruthy();
		expect(dropdownContent.get(0).props.style).not.toHaveProperty('width');
	});
});
