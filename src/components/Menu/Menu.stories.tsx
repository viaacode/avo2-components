import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '../../helpers/action';
import { IconName } from '../Icon/types';

import { Menu } from './Menu';

const menuItems = [
	{ label: 'Aluminium', id: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium' },
	{ label: 'Potassium', id: 'potassium' },
];

const menuItemsWithIcons = [
	{ ...menuItems[0], icon: 'circle' as IconName },
	{ ...menuItems[1], icon: 'box' as IconName },
	{ ...menuItems[2], icon: 'square' as IconName },
	{ ...menuItems[3], icon: 'triangle' as IconName },
];

const menuItemWithDivider = [
	[{ ...menuItems[0] }, { ...menuItems[1] }],
	[{ ...menuItems[2] }],
	[{ ...menuItems[3] }],
];

storiesOf('Menu', module)
	.addParameters({ jest: ['Menu'] })
	.add('Menu', () => <Menu menuItems={menuItems} onClick={action('clicked menu item')} />)
	.add('Menu with icons', () => <Menu menuItems={menuItemsWithIcons} />)
	.add('Menu with dividers', () => <Menu menuItems={menuItemWithDivider} />)
	.add('Menu no results', () => <Menu menuItems={[]} noResultsLabel="No results" />);
