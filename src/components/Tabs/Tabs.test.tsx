import { mount, shallow } from 'enzyme';
import React from 'react';

import { Tabs } from './Tabs';

const mockTabs = [
	{
		label: 'Videos',
		href: '#',
		active: true,
	},
	{
		label: 'Folder',
		href: '#',
	},
];

describe('<Tabs />', () => {
	it('Should be able to render', () => {
		shallow(<Tabs tabs={mockTabs} />);
	});

	it('Should set the correct className', () => {
		const tabsComponent = shallow(<Tabs tabs={mockTabs} />);

		expect(tabsComponent.hasClass('c-tabs')).toEqual(true);
	});

	it('Should set the correct className when hasBorder is true', () => {
		const tabsComponent = shallow(<Tabs tabs={mockTabs} hasBorder />);

		expect(tabsComponent.hasClass('c-tabs--bottom-border')).toEqual(true);
	});

	it('Should set the correct className when hasBorder is false', () => {
		const tabsComponent = shallow(<Tabs tabs={mockTabs} />);

		expect(tabsComponent.hasClass('c-tabs--bottom-border')).toEqual(false);
	});
});
