import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import styles from './Avatar.module.scss';
import { AvatarIcon, AvatarIconPropsSchema } from './AvatarIcon/AvatarIcon';

export interface AvatarPropsSchema extends DefaultProps, AvatarIconPropsSchema {
	name?: string;
	title?: string;
	dark?: boolean;
}

export const Avatar: FunctionComponent<AvatarPropsSchema> = ({
	className,
	initials,
	size,
	image,
	icon,
	name,
	title,
	dark = false,
}) =>
	name || title ? (
		<div className={clsx(className, 'c-avatar-and-text', styles['c-avatar-and-text'])}>
			<AvatarIcon initials={initials} size={size} image={image} />

			<div className={clsx('c-avatar-and-text__text', styles['c-avatar-and-text__text'])}>
				{name && <p className={clsx({ ['u-color-white']: !dark })}>{name}</p>}

				{title && <p className={dark ? 'u-text-muted' : 'u-color-gray-150'}>{title}</p>}
			</div>
		</div>
	) : (
		<AvatarIcon
			className={className}
			initials={initials}
			size={size}
			image={image}
			icon={icon}
		/>
	);
