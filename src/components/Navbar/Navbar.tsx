import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../types/index.js';

import './Navbar.scss';

export interface NavbarPropsSchema extends DefaultProps {
	placement?: 'top' | 'bottom';
	position?: 'fixed';
	autoHeight?: boolean;
	background?: 'white' | 'alt' | 'inverse';
	children: ReactNode;
}

export const Navbar: FunctionComponent<NavbarPropsSchema> = ({
	className,
	placement = 'top',
	position,
	autoHeight = false,
	background,
	children,
}) => (
	<div
		className={clsx(className, 'c-navbar', {
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
