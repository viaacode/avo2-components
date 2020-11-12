import classnames from 'classnames';
import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import './Button.scss';
import { ButtonTypeSchema } from './Button.types';

export interface ButtonPropsSchema extends DefaultProps {
	active?: boolean;
	ariaLabel?: string;
	arrow?: boolean;
	autoHeight?: boolean;
	block?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	icon?: IconNameSchema;
	label?: string;
	onClick?(event: MouseEvent<HTMLElement>): void;
	size?: 'small' | 'large';
	title?: string;
	type?: ButtonTypeSchema;
	id?: string;
}

const Button: FunctionComponent<ButtonPropsSchema> = ({
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
	id,
}) => {
	const handleButtonClick = (evt: MouseEvent<HTMLElement>) => {
		if (!disabled && onClick) {
			onClick(evt);
		}
	};

	return (
		<button
			className={classnames(className, 'c-button', {
				'c-button--active': active,
				'c-button--auto': autoHeight,
				'c-button--small': size === 'small',
				'c-button--large': size === 'large',
				'c-button--block': block,
				'c-button--icon': icon && !label,
				[`c-button--${type}`]: type,
			})}
			onClick={handleButtonClick}
			disabled={disabled}
			aria-label={ariaLabel}
			title={title}
			id={id}
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
};

export { Button };
