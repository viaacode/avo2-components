import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface NavbarProps {
	position?: 'top' | 'bottom';
	spacing?: 'regular' | 'double';
	autoHeight?: boolean;
	color?: string;
	children: ReactNode;
}

export const Navbar: FunctionComponent<NavbarProps> = ({
	position = 'top',
	spacing = 'regular',
	autoHeight = false,
	color = '',
	children,
}: NavbarProps) => (
	<div
		className={classNames({
			'c-navbar': true,
			'c-navbar--bordered-bottom': position === 'top', // Class indicates border location
			'c-navbar--bordered-top': position === 'bottom',
			'c-navbar--double-spaced': spacing === 'double',
			'c-navbar--auto': autoHeight,
			// [`c-navbar--${color}`]: color, // TODO color classes do not exist => ask mono
		})}
		style={{ backgroundColor: color }}
	>
		{children}
	</div>
);
