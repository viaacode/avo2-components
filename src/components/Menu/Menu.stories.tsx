import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Menu } from './Menu.js';
import {
	menuItems,
	menuItemsWithDivider,
	menuItemsWithIcons,
	menuItemsWithSearch,
} from './Menu.mocks.js';
import { MenuSearchResultContent } from './MenuSearchResultContent/MenuSearchResultContent.js';

storiesOf('components/Menu', module)
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
