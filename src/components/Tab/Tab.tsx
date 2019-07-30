import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

import classNames from 'classnames';

export interface TabProps {
	label: string;
	id: string | number;
	icon?: string;
	active?: boolean;
	onClick?: () => void;
}

export const Tab: FunctionComponent<TabProps> = ({
	label,
	icon,
	active,
	onClick = () => {},
}: TabProps) => (
	<div
		className={classNames('c-tabs__item', {
			'c-tabs__item--active': active,
		})}
		style={{ cursor: 'pointer' }}
		onClick={onClick}
	>
		{icon && <Icon name={icon} />}
		<span>{label}</span>
	</div>
);
