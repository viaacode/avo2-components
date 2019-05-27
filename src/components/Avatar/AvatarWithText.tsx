import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { Avatar, AvatarProps } from './Avatar';

export interface AvatarWithTextProps extends AvatarProps {
	name: string;
	title?: string;
}

export const AvatarWithText: FunctionComponent<AvatarWithTextProps> = ({
	initials,
	size,
	name,
	title,
}: AvatarWithTextProps) => (
	<div className="c-avatar-and-text">
		<Avatar initials={initials} size={size} />
		<div className="c-avatar-and-text__text">
			<p>{name}</p>
			{title && <p className="u-text-muted">{title}</p>}
		</div>
	</div>
);
