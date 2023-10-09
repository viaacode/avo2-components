import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';

import { Tab, TabPropsSchema } from './Tab/Tab';
import styles from './Tabs.module.scss';

export interface TabsPropsSchema extends DefaultProps {
	children?: React.ReactNode;
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
		className={clsx(className, 'c-tabs', styles['c-tabs'], {
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
