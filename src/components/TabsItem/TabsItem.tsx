import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

import classNames from 'classnames';

export interface Tab {
	label: string;
	href: string;
	icon?: string;
	active?: boolean;
}

export interface TabProps {
	tab: Tab;
}

export const TabsItem: FunctionComponent<TabProps> = ({ tab }: TabProps) => (
	<a
		className={classNames('c-tabs__item', {
			'c-tabs__item--active': tab.active,
		})}
		href={tab.href}
	>
		{tab.icon && <Icon name={tab.icon} />}
		{tab.label}
	</a>
);
