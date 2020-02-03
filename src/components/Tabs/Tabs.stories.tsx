import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers';
import { IconName } from '../Icon/Icon.types';
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

storiesOf('components/Tabs', module)
	.addParameters({ jest: ['Tabs'] })
	.add('Tabs', () => <Tabs tabs={mockTabs} onClick={action('tab clicked')} />)
	.add('Tabs (border)', () => <Tabs tabs={mockTabs} border onClick={action('tab clicked')} />)
	.add('Tabs with Icons', () => <Tabs tabs={mockTabsWithIcons} onClick={action('tab clicked')} />);
