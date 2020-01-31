import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps, IconName } from '../../../types';
import { Icon } from '../../Icon/Icon';

import './Tab.scss';

export interface TabProps extends DefaultProps {
	label: string;
	id: string | number;
	icon?: IconName;
	active?: boolean;
	onClick?: () => void;
}

export const Tab: FunctionComponent<TabProps> = ({
	className,
	label,
	icon,
	active,
	onClick = () => {},
}) => (
	<div
		className={classnames(className, 'c-tabs__item', {
			'c-tabs__item--active': active,
		})}
		style={{ cursor: 'pointer' }}
		onClick={onClick}
	>
		{icon && <Icon name={icon} />}
		<span>{label}</span>
	</div>
);
