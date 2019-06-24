import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface SpacerProps {
	side?: 'left' | 'top' | 'right' | 'bottom';
	size?: 'l' | 's';
	children?: ReactNode;
}

export const Spacer: FunctionComponent<SpacerProps> = ({ side, size, children }: SpacerProps) => {
	let className: string = 'u-spacer';

	if (side) {
		className += `-${side}`;
	}

	if (size) {
		className += `-${size}`;
	}

	return <div className={className}>{children}</div>;
};
