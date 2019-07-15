import React, { FunctionComponent } from 'react';

import { MenuSearchResultContent, MenuSearchResultItemInfo } from './MenuSearchResultContent';

export interface MenuProps {
	menuItems: MenuSearchResultItemInfo[]; // Between arrays, there will be a divider
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

export const MenuSearchResult: FunctionComponent<MenuProps> = ({
	menuItems,
	noResultsLabel,
	onClick = () => {},
}: MenuProps) => {
	return (
		<div className="c-menu c-menu--search-result c-menu--visible">
			<MenuSearchResultContent
				menuItems={menuItems}
				onClick={onClick}
				noResultsLabel={noResultsLabel}
			/>
		</div>
	);
};
