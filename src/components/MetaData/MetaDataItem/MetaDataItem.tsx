import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps, IconName } from '../../../types';
import { Icon } from '../../Icon/Icon';

import './MetaDataItem.scss';

export interface MetaDataItemProps extends DefaultProps {
	icon?: IconName;
	label?: string;
	children?: ReactNode;
}

export const MetaDataItem: FunctionComponent<MetaDataItemProps> = ({
	className,
	icon,
	label,
	children,
}) => (
	<li
		className={classnames(className, 'c-meta-data__item', {
			'c-meta-data-item--icon': icon,
		})}
	>
		{icon && !children && <Icon name={icon} />}
		{!children && <p>{label}</p>}
		{children}
	</li>
);
