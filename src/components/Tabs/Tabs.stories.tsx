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
		label: 'Videos',
		href: '#',
		active: true,
		icon: 'video',
	},
	{
		label: 'Folder',
		href: '#',
		icon: 'folder',
	},
];

storiesOf('Tabs', module)
	.addParameters({ jest: ['Tabs'] })
	.add('Tabs', () => <Tabs tabs={mockTabs} />)
	.add('Tabs (border)', () => <Tabs tabs={mockTabs} hasBorder />)
	.add('Tabs with Icons', () => <Tabs tabs={mockTabsWithIcons} />);
