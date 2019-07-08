import React, { FunctionComponent } from 'react';

import { AvatarIcon, AvatarIconProps } from './AvatarIcon';

export interface AvatarProps extends AvatarIconProps {
	name?: string;
	title?: string;
	subtitle?: string;
	hideText?: boolean;
}

export const Avatar: FunctionComponent<AvatarProps> = ({
	initials,
	size,
	image,
	name,
	title,
	subtitle: string,
	hideText,
}: AvatarProps) =>
	(name || title) && !hideText ? (
		<div className="c-avatar-and-text">
			<AvatarIcon initials={initials} size={size} image={image} />
			<div className="c-avatar-and-text__text">
				{name && <p>{name}</p>}
				{title && <p className="u-text-muted">{title}</p>}
			</div>
		</div>
	) : (
		<AvatarIcon initials={initials} size={size} image={image} />
	);
