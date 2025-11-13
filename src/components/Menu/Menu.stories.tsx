import { action } from 'storybook/actions';

import { Menu } from './Menu';
import {
	menuItems,
	menuItemsWithDivider,
	menuItemsWithIcons,
	menuItemsWithSearch,
} from './Menu.mocks';
import { MenuSearchResultContent } from './MenuSearchResultContent/MenuSearchResultContent';

export default {
	title: 'components/Menu',

	parameters: {
		jest: ['Menu'],
	},
};

export const _Menu = () => <Menu menuItems={menuItems} onClick={action('clicked menu item')} />;
export const MenuWithIcons = () => <Menu menuItems={menuItemsWithIcons} />;

MenuWithIcons.story = {
	name: 'Menu with icons',
};

export const MenuWithDividers = () => <Menu menuItems={menuItemsWithDivider} />;

MenuWithDividers.story = {
	name: 'Menu with dividers',
};

export const MenuWithSearchResults = () => (
	<Menu search>
		<MenuSearchResultContent menuItems={menuItemsWithSearch} />
	</Menu>
);

MenuWithSearchResults.story = {
	name: 'Menu with search results',
};

export const MenuNoResults = () => <Menu menuItems={[]} noResultsLabel="No results" />;

MenuNoResults.story = {
	name: 'Menu no results',
};
