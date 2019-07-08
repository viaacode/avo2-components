import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';
import { Tab, TabProps } from '../Tab/Tab';

import classNames from 'classnames';

export interface TabsProps {
	tabs: TabProps[];
	border?: boolean;
}

export const Tabs: FunctionComponent<TabsProps> = ({ tabs, border }: TabsProps) => (
	<nav
		className={classNames('c-tabs', {
			'c-tabs--bottom-border': border,
		})}
	>
		{tabs.map(tab => (
			<Tab {...tab} />
		))}
	</nav>
);
