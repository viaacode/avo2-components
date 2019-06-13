import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface NavbarProps {
	position?: 'top' | 'bottom';
	spacing?: 'regular' | 'double';
	autoHeight?: boolean;
	background?: 'white' | 'alt' | 'inverse';
	children: ReactNode;
}

export const Navbar: FunctionComponent<NavbarProps> = ({
	position = 'top',
	spacing = 'regular',
	autoHeight = false,
	background,
	children,
}: NavbarProps) => (
	<div
		className={classNames({
			'c-navbar': true,
			'c-navbar--bordered-bottom': position === 'top', // Class indicates border location
			'c-navbar--bordered-top': position === 'bottom',
			'c-navbar--double-spaced': spacing === 'double',
			'c-navbar--auto': autoHeight,
			[`.c-navbar--${background === 'alt' ? 'bg-alt' : background}`]: background,
		})}
	>
		{children}
	</div>
);
