import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { Tab, TabProps } from './Tab/Tab';

import './Tabs.scss';

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
		className={classnames(className, 'c-tabs', {
			'c-tabs--bottom-border': border,
		})}
	>
		{tabs.map(tab => (
			<Tab key={tab.label} {...tab} onClick={() => onClick(tab.id)} />
		))}
	</nav>
);
