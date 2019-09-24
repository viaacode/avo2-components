import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { MenuContent, MenuItemInfo } from './MenuContent/MenuContent';

import './Menu.scss';

export interface MenuProps extends DefaultProps {
	menuItems?: MenuItemInfo[] | MenuItemInfo[][]; // Between arrays, there will be a divider
	renderItem?: (menuItem: MenuItemInfo) => ReactNode; // If you want to render your own item
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

export const Menu: FunctionComponent<MenuProps> = ({
	className,
	children,
	menuItems = [],
	renderItem,
	noResultsLabel,
	onClick = () => {},
}) => {
	return (
		<div className={classnames(className, 'c-menu', 'c-menu--visible')}>
			{children ? (
				children
			) : (
				<MenuContent
					menuItems={menuItems}
					onClick={onClick}
					renderItem={renderItem}
					noResultsLabel={noResultsLabel}
				/>
			)}
		</div>
	);
};
