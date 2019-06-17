import { mount, shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { Button, Modal } from '../..';
import { Dropdown } from './Dropdown';

describe('<Dropdown />', () => {
	it('Should be able to render', () => {
		shallow(
			<Dropdown label="Show options">
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);
	});

	it('Should by default render with a closed flyout', () => {
		const dropdownComponent = shallow(
			<Dropdown label="Show options">
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(dropdownComponent.find('.c-menu')).toHaveLength(0);
	});

	it('Should open flyout when clicking the button', () => {
		const dropdownComponent = mount(
			<Dropdown label="Show options">
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		dropdownComponent
			.find('button')
			.first()
			.simulate('click');

		expect(dropdownComponent.find('.c-menu')).toHaveLength(1);
		expect(dropdownComponent.find('.c-menu--visible')).toHaveLength(1);
	});

	it('Should set the correct className for button', () => {
		const dropdownComponent = mount(
			<Dropdown label="Show options">
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(
			dropdownComponent
				.find('button')
				.first()
				.hasClass('c-button')
		).toEqual(true);
	});

	it('Should correctly pass `label`', () => {
		const label = 'Test label';

		const dropdownComponent = mount(
			<Dropdown label={label}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(dropdownComponent.find('.c-button__label').text()).toEqual(label);
	});
});
