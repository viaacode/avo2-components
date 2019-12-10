import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/types';

import './Button.scss';

export interface ButtonProps extends DefaultProps {
	active?: boolean;
	ariaLabel?: string;
	arrow?: boolean;
	autoHeight?: boolean;
	block?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	icon?: IconName;
	label?: string;
	onClick?(event: MouseEvent<HTMLElement>): void;
	size?: 'small';
	title?: string;
	type?:
		| 'borderless-i'
		| 'borderless'
		| 'danger-hover'
		| 'danger'
		| 'link'
		| 'inline-link'
		| 'primary'
		| 'secondary-i'
		| 'secondary'
		| 'tertiary';
}

const Button: FunctionComponent<ButtonProps> = ({
	active,
	ariaLabel,
	arrow,
	autoHeight = false,
	block = false,
	children,
	className,
	disabled,
	icon,
	label,
	onClick,
	size,
	title,
	type = 'primary',
}) => (
	<button
		className={classnames(className, 'c-button', {
			'c-button--active': active,
			'c-button--auto': autoHeight,
			'c-button--small': size === 'small',
			'c-button--block': block,
			'c-button--icon': icon && !label,
			[`c-button--${type}`]: type,
		})}
		onClick={disabled ? () => {} : onClick}
		disabled={disabled}
		aria-label={ariaLabel}
		title={title}
	>
		{children ? (
			children
		) : (
			<div className="c-button__content">
				{icon && <Icon className="c-button__icon" name={icon} active={active} />}
				{label && <div className="c-button__label">{label}</div>}
				{arrow && <Icon className="c-button__icon" name="caret-down" />}
			</div>
		)}
	</button>
);

export { Button };
