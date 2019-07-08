import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';
import { Tab, TabsItem } from '../TabsItem/TabsItem';

import classNames from 'classnames';

export interface TabsProps {
	tabs: Tab[];
	hasBorder?: boolean;
}

export const Tabs: FunctionComponent<TabsProps> = ({ tabs, hasBorder }: TabsProps) => (
	<nav
		className={classNames('c-tabs', {
			'c-tabs--bottom-border': hasBorder,
		})}
	>
		{tabs.map(tab => (
			<TabsItem tab={tab} />
		))}
	</nav>
);
