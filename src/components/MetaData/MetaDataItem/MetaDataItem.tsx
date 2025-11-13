import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import type { IconNameSchema } from '../../Icon/Icon.types';

import './MetaDataItem.scss';

export interface MetaDataItemPropsSchema extends DefaultProps {
	icon?: IconNameSchema;
	label?: string;
	children?: ReactNode;
}

export const MetaDataItem: FunctionComponent<MetaDataItemPropsSchema> = ({
	className,
	icon,
	label,
	children,
	style,
}) => (
	<li
		className={clsx(className, 'c-meta-data__item', {
			'c-meta-data-item--icon': icon,
		})}
		style={style}
	>
		{icon && !children && <Icon name={icon} />}
		{!children && <p>{label}</p>}
		{children}
	</li>
);
