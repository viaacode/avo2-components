import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './Navbar.scss';

export interface NavbarProps extends DefaultProps {
	placement?: 'top' | 'bottom';
	position?: 'fixed';
	spacing?: 'regular' | 'double';
	autoHeight?: boolean;
	background?: 'white' | 'alt' | 'inverse';
	children: ReactNode;
}

export const Navbar: FunctionComponent<NavbarProps> = ({
	className,
	placement = 'top',
	position,
	spacing = 'regular',
	autoHeight = false,
	background,
	children,
}) => (
	<div
		className={classNames(className, 'c-navbar', {
			'c-navbar--bordered-bottom': placement === 'top', // Class indicates border location
			'c-navbar--bordered-top': placement === 'bottom',
			'c-navbar--fixed': position === 'fixed',
			'c-navbar--auto': autoHeight,
			'c-navbar--white': background === 'white',
			'c-navbar--bg-alt': background === 'alt',
			'c-navbar--inverse': background === 'inverse',
		})}
	>
		{children}
	</div>
);
