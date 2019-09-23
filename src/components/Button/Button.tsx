import React, { FunctionComponent, MouseEvent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import './Button.scss';

export interface ButtonProps extends DefaultProps {
	ariaLabel?: string;
	title?: string;
	label?: string;
	type?:
		| 'primary'
		| 'secondary'
		| 'secondary-i'
		| 'tertiary'
		| 'borderless'
		| 'borderless-i'
		| 'danger'
		| 'danger-hover'
		| 'link';
	size?: 'small';
	block?: boolean;
	icon?: string;
	arrow?: boolean;
	active?: boolean;
	disabled?: boolean;
	onClick?(event: MouseEvent<HTMLElement>): void;
}

const Button: FunctionComponent<ButtonProps> = ({
	ariaLabel,
	title,
	className,
	label,
	type,
	size,
	block = false,
	icon,
	arrow,
	active,
	disabled,
	onClick,
}) => (
	<button
		className={classNames(className, 'c-button', {
			active,
			// Not sure why there are 3 classes in mono styles: c-button-action, c-button--active, active
			'c-button-action': active,
			'c-button--active': active,
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
		<div className="c-button__content">
			{icon && <Icon name={icon} active={active} />}
			{label && <div className="c-button__label">{label}</div>}
			{arrow && <Icon name="caret-down" />}
		</div>
	</button>
);

Button.defaultProps = {
	type: 'primary',
};

export { Button };
