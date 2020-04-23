import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';
import { Placement } from 'popper.js';

import { DefaultProps } from '../../types';
import { MenuContent, MenuItemInfoSchema } from './MenuContent/MenuContent';

import './Menu.scss';

export interface MenuPropsSchema extends DefaultProps {
	menuItems?: MenuItemInfoSchema[] | MenuItemInfoSchema[][]; // Between arrays, there will be a divider
	renderItem?: (menuItem: MenuItemInfoSchema) => ReactNode; // If you want to render your own item
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
	innerRef?: (ref: HTMLElement | null) => void;
	isOpen?: boolean;
	placement?: Placement; // Only used in Dropdown
	search?: boolean;
	style?: CSSProperties;
}

export const Menu: FunctionComponent<MenuPropsSchema> = ({
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
