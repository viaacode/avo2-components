import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '../../helpers/action';

import { IconName } from '../Icon/types';
import { Tabs } from '../Tabs/Tabs';

const mockTabs = [
	{
		label: 'Videos',
		id: 'video',
		active: true,
	},
	{
		label: 'Folder',
		id: 'folder',
	},
];

const mockTabsWithIcons = [
	{
		...mockTabs[0],
		icon: 'video' as IconName,
	},
	{
		...mockTabs[1],
		icon: 'folder' as IconName,
	},
];

storiesOf('Tabs', module)
	.addParameters({ jest: ['Tabs'] })
	.add('Tabs', () => <Tabs tabs={mockTabs} onClick={action('tab clicked')} />)
	.add('Tabs (border)', () => <Tabs tabs={mockTabs} border onClick={action('tab clicked')} />)
	.add('Tabs with Icons', () => <Tabs tabs={mockTabsWithIcons} onClick={action('tab clicked')} />);
