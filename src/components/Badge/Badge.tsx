import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import './Badge.scss';

export interface BadgeProps extends DefaultProps {
	text: string;
	type?: 'default' | 'success' | 'error';
}

export const Badge: FunctionComponent<BadgeProps> = ({ className, text, type = 'default' }) => (
	<div className={classnames(className, 'c-badge', { [`c-badge--${type}`]: type })}>{text}</div>
);
