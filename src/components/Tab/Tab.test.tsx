import { mount, shallow } from 'enzyme';
import React from 'react';

import { Icon } from '../Icon/Icon';

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
		const tabComponent = mount(<Tab {...mockTabWithIcon} />);

		const iconComponent = tabComponent.find(Icon);

		expect(iconComponent).toHaveLength(1);
		expect(iconComponent.prop('name')).toEqual(mockTabWithIcon.icon);
	});

	it('Should set the correct className when passing `active`', () => {
		const tabComponent = shallow(<Tab {...mockTab} />);

		expect(tabComponent.hasClass('c-tabs__item--active')).toEqual(true);
	});

	it('Should render `label` correctly', () => {
		const tabComponent = shallow(<Tab {...mockTab} />);

		const labelElement = tabComponent.find('span');

		expect(labelElement).toHaveLength(1);

		expect(labelElement.text()).toEqual(mockTab.label);
	});

	it('Should pass on `href` correctly ', () => {
		const tabComponent = shallow(<Tab {...mockTab} />);

		expect(tabComponent.prop('href')).toEqual(mockTab.href);
	});
});
