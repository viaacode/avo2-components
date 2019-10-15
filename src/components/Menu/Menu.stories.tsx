import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '../../helpers/action';

import { Menu } from './Menu';
import { MenuSearchResultContent } from './MenuSearchResultContent/MenuSearchResultContent';

import {
	menuItems,
	menuItemsWithDivider,
	menuItemsWithIcons,
	menuItemsWithSearch,
} from './Menu.mocks';

storiesOf('Menu', module)
	.addParameters({ jest: ['Menu'] })
	.add('Menu', () => <Menu menuItems={menuItems} onClick={action('clicked menu item')} />)
	.add('Menu with icons', () => <Menu menuItems={menuItemsWithIcons} />)
	.add('Menu with dividers', () => <Menu menuItems={menuItemsWithDivider} />)
	.add('Menu with search results', () => (
		<Menu search>
			<MenuSearchResultContent menuItems={menuItemsWithSearch} />
		</Menu>
	))
	.add('Menu no results', () => <Menu menuItems={[]} noResultsLabel="No results" />);
