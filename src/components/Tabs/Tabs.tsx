import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import { Tab, TabPropsSchema } from './Tab/Tab';
import './Tabs.scss';

export interface TabsPropsSchema extends DefaultProps {
	tabs: TabPropsSchema[];
	border?: boolean;
	onClick?: (tabId: string | number) => void;
}

export const Tabs: FunctionComponent<TabsPropsSchema> = ({
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
