import classnames from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { IconNameSchema } from '../../Icon/Icon.types';
import styles from '../Avatar.module.scss';

export interface AvatarIconPropsSchema extends DefaultProps {
	initials?: string;
	image?: string;
	icon?: IconNameSchema;
	size?: 'small' | 'large';
}

export const AvatarIcon: FunctionComponent<AvatarIconPropsSchema> = ({
	className,
	initials,
	image,
	icon = IconNameSchema.user,
	size,
}) => (
	<div
		className={classnames(className, {
			// Normal
			['c-avatar']: true,
			['c-avatar--img']: image,
			['c-avatar--small']: size === 'small',
			['c-avatar--large']: size === 'large',

			// Module
			[styles['c-avatar']]: true,
			[styles['c-avatar--img']]: image,
			[styles['c-avatar--small']]: size === 'small',
			[styles['c-avatar--large']]: size === 'large',
		})}
	>
		{image ? (
			<img src={image} alt="avatar" />
		) : initials ? (
			initials
		) : (
			<Icon name={icon} size={size} />
		)}
	</div>
);
