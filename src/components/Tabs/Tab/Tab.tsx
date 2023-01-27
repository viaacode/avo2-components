import classnames from 'clsx';
import { noop } from 'lodash-es';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { IconNameSchema } from '../../Icon/Icon.types';

import './Tab.scss';

export interface TabPropsSchema extends DefaultProps {
	label: ReactNode;
	id: string | number;
	icon?: IconNameSchema;
	active?: boolean;
	dark?: boolean;
	onClick?: () => void;
}

export const Tab: FunctionComponent<TabPropsSchema> = ({
	className,
	label,
	icon,
	active,
	dark = false,
	onClick = noop,
}) => (
	<div
		className={classnames(className, 'c-tab-item', {
			'c-tab-item__active': active,
			'c-tab-item__dark': dark,
		})}
		style={{ cursor: 'pointer' }}
		onClick={onClick}
	>
		{icon && <Icon name={icon} />}
		<span>{label}</span>
	</div>
);
