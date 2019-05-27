import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

export interface AvatarProps {
	initials: string;
	size?: 'small';
}

export const Avatar: FunctionComponent<AvatarProps> = ({ initials, size }: AvatarProps) => (
	<div className={classNames('c-avatar', { 'c-avatar--small': size === 'small' })}>{initials}</div>
);
