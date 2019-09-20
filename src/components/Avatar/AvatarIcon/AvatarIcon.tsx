import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../../types';

export interface AvatarIconProps extends DefaultProps {
	initials: string;
	image?: string;
	size?: 'small';
}

export const AvatarIcon: FunctionComponent<AvatarIconProps> = ({
	className,
	initials,
	image,
	size,
}: AvatarIconProps) => (
	<div
		className={classNames(className, 'c-avatar', {
			'c-avatar--img': image,
			'c-avatar--small': size === 'small',
		})}
	>
		{image ? <img src={image} alt="avatar" /> : initials}
	</div>
);
