import { mount, shallow } from 'enzyme';
import React from 'react';

import { TabsItem } from './TabsItem';

const mockTab = {
	label: 'Videos',
	href: '#',
	active: true,
};

const mockTabWithIcon = {
	label: 'Videos',
	href: '#',
	active: true,
	icon: 'video',
};

describe('<TabsItem />', () => {
	it('Should be able to render', () => {
		shallow(<TabsItem tab={mockTab} />);
	});

	it('Should set the correct className', () => {
		const tabComponent = shallow(<TabsItem tab={mockTab} />);

		expect(tabComponent.hasClass('c-tabs__item')).toEqual(true);
	});

	it('Should set the correct className when icon is passed', () => {
		const tabComponent = shallow(<TabsItem tab={mockTabWithIcon} />);

		const iconElement = tabComponent.find('.o-svg-icon');

		expect(iconElement).toHaveLength(1);
	});
});
