import React, { FunctionComponent, ReactNode } from 'react';

import { MenuContent, MenuItemInfo } from './MenuContent';

export interface MenuProps {
	menuItems: MenuItemInfo[] | MenuItemInfo[][]; // Between arrays, there will be a divider
	renderItem?: (menuItem: MenuItemInfo) => ReactNode; // If you want to render your own item
	onClick?: (menuItemId: string | number) => void;
}

export const Menu: FunctionComponent<MenuProps> = ({
	menuItems,
	renderItem,
	onClick = () => {},
}: MenuProps) => {
	return (
		<div className="c-menu c-menu--visible">
			<MenuContent menuItems={menuItems} onClick={onClick} renderItem={renderItem} />
		</div>
	);
};
