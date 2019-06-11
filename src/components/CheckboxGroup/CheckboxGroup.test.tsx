import { mount, shallow } from 'enzyme';
import React from 'react';

import { action } from '@storybook/addon-actions';
import { CheckboxGroup, CheckboxGroupState } from './CheckboxGroup';
import { countOptions } from './CheckboxGroup.stories';

describe('<Checkbox />', () => {
	it('Should be able to render', () => {
		shallow(
			<CheckboxGroup
				label="Counting"
				id="counting"
				options={countOptions}
				onChange={action('CheckboxGroup changed')}
			/>
		);
	});

	it('Should be able to render with less than 10 items', () => {
		const checkboxGroupComponent = shallow(
			<CheckboxGroup
				label="Counting"
				id="counting"
				options={countOptions.slice(0, 5)}
				onChange={action('CheckboxGroup changed')}
			/>
		);
		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(5);
	});

	it('Should be able to render with default collapsedItemCount of 10', () => {
		const checkboxGroupComponent = shallow(
			<CheckboxGroup
				label="Counting"
				id="counting"
				options={countOptions}
				onChange={action('CheckboxGroup changed')}
			/>
		);
		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(10);

		checkboxGroupComponent.find('.c-link-toggle').simulate('click');

		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(12);

		checkboxGroupComponent.find('.c-link-toggle').simulate('click');

		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(10);
	});

	it('Should be able to render with custom collapsedItemCount of 6', () => {
		const checkboxGroupComponent = shallow(
			<CheckboxGroup
				label="Counting"
				id="counting"
				options={countOptions}
				collapsedItemCount={6}
				onChange={action('CheckboxGroup changed')}
			/>
		);
		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(6);

		checkboxGroupComponent.find('.c-link-toggle').simulate('click');

		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(12);

		checkboxGroupComponent.find('.c-link-toggle').simulate('click');

		expect(checkboxGroupComponent.find('Checkbox')).toHaveLength(6);
	});

	it('Should call `onChange` when toggling checkbox', () => {
		const onChangeHandler = jest.fn();

		const checkboxGroupComponent = mount(
			<CheckboxGroup
				label="Counting"
				id="counting"
				options={countOptions}
				onChange={onChangeHandler}
			/>
		);

		const defaultState = {
			one: false,
			two: false,
			three: false,
			four: false,
			five: false,
			six: false,
			seven: false,
			eight: false,
			nine: false,
			ten: false,
			elven: false,
			twelve: false,
		};

		const checkboxes = checkboxGroupComponent.find('[type="checkbox"]');

		checkboxes.at(2).simulate('change', { target: { checked: true } });

		expect((checkboxGroupComponent.state() as CheckboxGroupState).checkedStates).toMatchObject({
			...defaultState,
			three: true,
		});

		checkboxes.at(3).simulate('change', { target: { checked: true } });

		expect((checkboxGroupComponent.state() as CheckboxGroupState).checkedStates).toMatchObject({
			...defaultState,
			three: true,
			four: true,
		});

		checkboxes.at(2).simulate('change', { target: { checked: false } });

		expect((checkboxGroupComponent.state() as CheckboxGroupState).checkedStates).toMatchObject({
			...defaultState,
			four: true,
		});
	});
});
