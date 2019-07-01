import { mount, shallow } from 'enzyme';
import React from 'react';

import { Flex } from './Flex';

describe('<Flex />', () => {
	it('Should be able to render', () => {
		shallow(<Flex />);
	});

	it('Should set the correct className', () => {
		const flexComponent = shallow(<Flex />);

		expect(flexComponent.hasClass('o-flex')).toEqual(true);
	});

	it('Should set the correct className when orientation is passed', () => {
		const flexComponent = shallow(<Flex orientation="horizontal" />);

		expect(flexComponent.hasClass('o-flex--horizontal')).toEqual(true);
	});

	it('Should set the correct className when center is passed', () => {
		const flexComponent = shallow(<Flex center />);

		expect(flexComponent.hasClass('o-flex--center')).toEqual(true);
	});

	it('Should set the correct className when orientation and center are passed', () => {
		const flexComponent = shallow(<Flex orientation="horizontal" center />);

		expect(flexComponent.hasClass('o-flex--horizontal-center')).toEqual(true);
	});

	it('Should set the correct className when justify is passed', () => {
		const flexComponent = shallow(<Flex justify />);

		expect(flexComponent.hasClass('o-flex--justify-between')).toEqual(true);
	});

	it('Should set the correct className when spaced is passed (boolean)', () => {
		const flexComponent = shallow(<Flex spaced />);

		expect(flexComponent.hasClass('o-flex--spaced')).toEqual(true);
	});

	it('Should set the correct className when spaced is passed (wide)', () => {
		const flexComponent = shallow(<Flex spaced="wide" />);

		expect(flexComponent.hasClass('o-flex--spaced-wide')).toEqual(true);
	});

	it('Should correctly pass children', () => {
		const flexComponent = mount(
			<Flex>
				<p>What a nice smile you have there!</p>
			</Flex>
		);

		const paragraph = flexComponent.find('p');

		expect(flexComponent.html()).toContain(paragraph.html());
	});
});
