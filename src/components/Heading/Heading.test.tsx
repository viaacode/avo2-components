import { shallow } from 'enzyme';
import React from 'react';

import { Heading } from './Heading';

describe('<Heading />', () => {
	it('Should be able to render', () => {
		shallow(<Heading type="h1">Heading</Heading>);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-avatar-custom';
		const headingComponent = (
			<Heading className={customClass} type="h1">
				Lorem ipsum
			</Heading>
		);

		expect(shallow(headingComponent).hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass children', () => {
		const headingComponent = shallow(
			<Heading type="h1">
				<a href="#">Lorem ipsum</a>
			</Heading>
		);

		const child = headingComponent.find('a');

		expect(headingComponent.children().html()).toEqual(child.html());
	});
});
