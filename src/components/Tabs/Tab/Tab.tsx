import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { IconNameSchema } from '../../Icon/Icon.types';

import './Tab.scss';

export interface TabPropsSchema extends DefaultProps {
	label: string;
	id: string | number;
	icon?: IconNameSchema;
	active?: boolean;
	onClick?: () => void;
}

export const Tab: FunctionComponent<TabPropsSchema> = ({
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
