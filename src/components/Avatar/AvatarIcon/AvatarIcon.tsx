import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { IconName } from '../../Icon/types';

export interface AvatarIconProps extends DefaultProps {
	initials?: string;
	image?: string;
	icon?: IconName;
	size?: 'small' | 'large';
}

export const AvatarIcon: FunctionComponent<AvatarIconProps> = ({
	className,
	initials,
	image,
	icon = 'user',
	size,
}) => (
	<div
		className={classNames(className, 'c-avatar', {
			'c-avatar--img': image,
			'c-avatar--small': size === 'small',
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
