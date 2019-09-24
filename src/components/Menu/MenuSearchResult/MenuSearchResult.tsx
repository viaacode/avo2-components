import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';
import { Menu } from '../Menu';
import { MenuSearchResultContent, MenuSearchResultItemInfo } from './MenuSearchResultContent';

export interface MenuProps extends DefaultProps {
	menuItems: MenuSearchResultItemInfo[]; // Between arrays, there will be a divider
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

export const MenuSearchResult: FunctionComponent<MenuProps> = ({
	className,
	menuItems,
	noResultsLabel,
	onClick = () => {},
}) => {
	return (
		<Menu className={classnames(className, 'c-menu--search-result', 'c-menu--visible')}>
			<MenuSearchResultContent
				menuItems={menuItems}
				onClick={onClick}
				noResultsLabel={noResultsLabel}
			/>
		</Menu>
	);
};
