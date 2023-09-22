import clsx from 'clsx';
import { noop } from 'lodash-es';
import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

import styles from './Menu.module.scss';
import { MenuContent, MenuItemInfoSchema } from './MenuContent/MenuContent';

export interface MenuPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	menuItems?: MenuItemInfoSchema[] | MenuItemInfoSchema[][]; // Between arrays, there will be a divider
	renderItem?: (menuItem: MenuItemInfoSchema) => ReactNode; // If you want to render your own item
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
	isOpen?: boolean;
	search?: boolean;
	style?: CSSProperties;
}

export const Menu: FunctionComponent<MenuPropsSchema> = ({
	className,
	children,
	menuItems = [],
	renderItem,
	noResultsLabel,
	onClick = noop,
	isOpen = true,
	search,
	style,
}) => {
	return (
		<div
			className={clsx(className, {
				// Normal
				['c-menu']: true,
				['c-menu--search-result']: search,
				['c-menu--visible']: isOpen,

				// Module
				[styles['c-menu']]: true,
				[styles['c-menu--search-result']]: search,
				[styles['c-menu--visible']]: isOpen,
			})}
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
