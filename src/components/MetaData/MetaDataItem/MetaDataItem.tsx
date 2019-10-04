import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { IconName } from '../../Icon/types';

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
		className={classNames(className, 'c-meta-data__item', {
			'c-meta-data-item--icon': icon,
		})}
	>
		{icon && !children && <Icon name={icon} />}
		{!children && <p>{label}</p>}
		{children}
	</li>
);
