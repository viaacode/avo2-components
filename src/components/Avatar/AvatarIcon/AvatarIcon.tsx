import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps, IconName } from '../../../types';
import { Icon } from '../../Icon/Icon';

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
		className={classnames(className, 'c-avatar', {
			'c-avatar--img': image,
			'c-avatar--small': size === 'small',
			'c-avatar--large': size === 'large',
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
