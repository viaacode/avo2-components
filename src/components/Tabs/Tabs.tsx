import React, { FunctionComponent } from 'react';

import { Tab, TabProps } from '../Tab/Tab';

import classNames from 'classnames';

export interface TabsProps {
	tabs: TabProps[];
	border?: boolean;
	onClick?: (tabId: string | number) => void;
}

export const Tabs: FunctionComponent<TabsProps> = ({ tabs, border, onClick = () => {} }) => (
	<nav
		className={classNames('c-tabs', {
			'c-tabs--bottom-border': border,
		})}
	>
		{tabs.map(tab => (
			<Tab key={tab.label} {...tab} onClick={() => onClick(tab.id)} />
		))}
	</nav>
);
