import classnames from 'classnames';
import { noop } from 'lodash-es';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import { Tab, TabPropsSchema } from './Tab/Tab';
import styles from './Tabs.module.scss';

export interface TabsPropsSchema extends DefaultProps {
	tabs: TabPropsSchema[];
	border?: boolean;
	dark?: boolean;
	onClick?: (tabId: string | number) => void;
}

export const Tabs: FunctionComponent<TabsPropsSchema> = ({
	className,
	tabs,
	border,
	dark = false,
	onClick = noop,
}) => (
	<nav
		className={classnames(className, 'c-tabs', styles['c-tabs'], {
			// Normal
			['c-tabs__bottom-border']: border,

			// Module
			[styles['c-tabs__bottom-border']]: border,
		})}
	>
		{tabs.map((tab) => (
			<Tab key={tab.id} {...tab} dark={dark} onClick={() => onClick(tab.id)} />
		))}
	</nav>
);
