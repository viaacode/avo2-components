import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

import classNames from 'classnames';

export interface TabProps {
	label: string;
	href: string;
	icon?: string;
	active?: boolean;
}

export const Tab: FunctionComponent<TabProps> = ({ label, href, icon, active }: TabProps) => (
	<a
		className={classNames('c-tabs__item', {
			'c-tabs__item--active': active,
		})}
		href={href}
	>
		{icon && <Icon name={icon} />}
		{label}
	</a>
);
