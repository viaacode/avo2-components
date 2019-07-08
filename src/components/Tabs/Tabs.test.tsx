import { mount, shallow } from 'enzyme';
import React from 'react';

import { Tab } from '../Tab/Tab';
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

	it('Should set the correct className when border is passed', () => {
		const tabsComponent1 = shallow(<Tabs tabs={mockTabs} border />);
		const tabsComponent2 = shallow(<Tabs tabs={mockTabs} />);

		expect(tabsComponent1.hasClass('c-tabs--bottom-border')).toEqual(true);
		expect(tabsComponent2.hasClass('c-tabs--bottom-border')).toEqual(false);
	});

	it('Should correctly render `Tab`-components as children', () => {
		const tabsComponent = shallow(<Tabs tabs={mockTabs} />);

		const tabElement = tabsComponent.find(Tab);

		expect(tabElement).toHaveLength(2);
	});
});
