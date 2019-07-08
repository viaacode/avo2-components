import { mount, shallow } from 'enzyme';
import React from 'react';

import { Tab } from './Tab';

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

describe('<Tab />', () => {
	it('Should be able to render', () => {
		shallow(<Tab {...mockTab} />);
	});

	it('Should set the correct className', () => {
		const tabComponent = shallow(<Tab {...mockTab} />);

		expect(tabComponent.hasClass('c-tabs__item')).toEqual(true);
	});

	it('Should set the correct className when icon is passed', () => {
		const tabComponent = shallow(<Tab {...mockTabWithIcon} />);

		const iconElement = tabComponent.find('.o-svg-icon');

		expect(iconElement).toHaveLength(1);
	});
});
