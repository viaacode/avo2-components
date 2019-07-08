import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { Tabs } from '../Tabs/Tabs';

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

const mockTabsWithIcons = [
	{
		...mockTabs[0],
		icon: 'video',
	},
	{
		...mockTabs[1],
		icon: 'folder',
	},
];

storiesOf('Tabs', module)
	.addParameters({ jest: ['Tabs'] })
	.add('Tabs', () => <Tabs tabs={mockTabs} />)
	.add('Tabs (border)', () => <Tabs tabs={mockTabs} border />)
	.add('Tabs with Icons', () => <Tabs tabs={mockTabsWithIcons} />);
