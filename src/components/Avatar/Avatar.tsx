import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { AvatarIcon, AvatarIconProps } from './AvatarIcon/AvatarIcon';

import './Avatar.scss';

export interface AvatarProps extends DefaultProps, AvatarIconProps {
	name?: string;
	title?: string;
}

export const Avatar: FunctionComponent<AvatarProps> = ({
	className,
	initials,
	size,
	image,
	name,
	title,
}) =>
	name || title ? (
		<div className={classnames(className, 'c-avatar-and-text')}>
			<AvatarIcon initials={initials} size={size} image={image} />
			<div className="c-avatar-and-text__text">
				{name && <p>{name}</p>}
				{title && <p className="u-text-muted">{title}</p>}
			</div>
		</div>
	) : (
		<AvatarIcon className={className} initials={initials} size={size} image={image} />
	);
