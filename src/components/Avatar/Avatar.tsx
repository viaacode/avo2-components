import React, { FunctionComponent } from 'react';

import { AvatarIcon } from './AvatarIcon';

export interface AvatarProps {
	name?: string;
	title?: string;
	initials: string;
	image?: string;
	size?: 'small';
}

export const Avatar: FunctionComponent<AvatarProps> = ({
	initials,
	size,
	image,
	name,
	title,
}: AvatarProps) =>
	name || title ? (
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
