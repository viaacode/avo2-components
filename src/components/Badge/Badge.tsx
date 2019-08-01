import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

export interface BadgeProps extends DefaultProps {
	text: string;
	type?: 'default' | 'success' | 'error';
}

export const Badge: FunctionComponent<BadgeProps> = ({
	className,
	text,
	type = 'default',
}: BadgeProps) => (
	<div className={classNames(className, 'c-badge', { [`c-badge--${type}`]: type })}>{text}</div>
);
