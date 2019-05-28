import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface BadgeProps {
	text: string;
	type?: 'default' | 'success' | 'error';
}

const Badge: FunctionComponent<BadgeProps> = ({ text, type }: BadgeProps) => (
	<div className={classNames('c-badge', { [`c-badge--${type}`]: type })}>{text}</div>
);

Badge.defaultProps = {
	type: 'default',
};

export { Badge };
