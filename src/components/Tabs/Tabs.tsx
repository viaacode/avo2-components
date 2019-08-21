import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import { Tab, TabProps } from '../Tab/Tab';

export interface TabsProps extends DefaultProps {
	tabs: TabProps[];
	border?: boolean;
	onClick?: (tabId: string | number) => void;
}

export const Tabs: FunctionComponent<TabsProps> = ({
	className,
	tabs,
	border,
	onClick = () => {},
}) => (
	<nav
		className={classNames(className, 'c-tabs', {
			'c-tabs--bottom-border': border,
		})}
	>
		{tabs.map(tab => (
			<Tab key={tab.label} {...tab} onClick={() => onClick(tab.id)} />
		))}
	</nav>
);
