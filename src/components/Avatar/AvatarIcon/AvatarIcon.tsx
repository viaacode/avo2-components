import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

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
		className={classnames(className, 'c-avatar-icon', {
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
