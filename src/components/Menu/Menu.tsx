import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { RefHandler } from 'react-popper';

import classnames from 'classnames';
import { Placement } from 'popper.js';

import { DefaultProps } from '../../types';
import { MenuContent, MenuItemInfo } from './MenuContent/MenuContent';

import './Menu.scss';

export interface MenuProps extends DefaultProps {
	menuItems?: MenuItemInfo[] | MenuItemInfo[][]; // Between arrays, there will be a divider
	renderItem?: (menuItem: MenuItemInfo) => ReactNode; // If you want to render your own item
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
	innerRef?: RefHandler;
	isOpen?: boolean;
	placement?: Placement; // Only used in Dropdown
	search?: boolean;
	style?: CSSProperties;
}

export const Menu: FunctionComponent<MenuProps> = ({
	className,
	children,
	menuItems = [],
	renderItem,
	noResultsLabel,
	onClick = () => {},
	innerRef,
	isOpen = true,
	placement,
	search,
	style,
}) => {
	return (
		<div
			className={classnames(className, 'c-menu', {
				'c-menu--search-result': search,
				'c-menu--visible': isOpen,
			})}
			data-placement={placement}
			ref={innerRef}
			style={style}
		>
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
