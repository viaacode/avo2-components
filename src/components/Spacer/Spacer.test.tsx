import { shallow } from 'enzyme';
import React from 'react';

import { Spacer } from './Spacer';

describe('<Spacer />', () => {
	it('Should be able to render', () => {
		shallow(<Spacer />);
	});

	it('Should set the correct className', () => {
		const thumbnailComponent = shallow(<Spacer />);

		expect(thumbnailComponent.hasClass('u-spacer')).toEqual(true);
	});

	it('Should set the correct className when side is passed', () => {
		const thumbnailComponent = shallow(<Spacer side="left" />);

		expect(thumbnailComponent.hasClass('u-spacer-left')).toEqual(true);
	});

	it('Should set the correct className when size is passed', () => {
		const thumbnailComponent = shallow(<Spacer size="s" />);

		expect(thumbnailComponent.hasClass('u-spacer-s')).toEqual(true);
	});

	it('Should set the correct className when size and side are passed', () => {
		const thumbnailComponent = shallow(<Spacer side="left" size="s" />);

		expect(thumbnailComponent.hasClass('u-spacer-left-s')).toEqual(true);
	});
});
