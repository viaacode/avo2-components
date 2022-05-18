import classnames from 'classnames';
import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema, IconTypeSchema } from '../Icon/Icon.types';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip.slots';

import skins from './Button-skins.module.scss';
import styles from './Button.module.scss';
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
	iconType?: IconTypeSchema;
	label?: string;

	onClick?(event: MouseEvent<HTMLElement>): void;

	size?: 'small' | 'large';
	title?: string;
	altTitle?: string;
	tooltip?: string;
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
	tooltip,
	iconType,
	type = 'primary',
	id,
}) => {
	const rootCls = classnames(className, styles['c-button'], skins['c-button'], {
		[styles['c-button--active']]: active,
		[styles['c-button--auto']]: autoHeight,
		[styles['c-button--small']]: size === 'small',
		[styles['c-button--large']]: size === 'large',
		[styles['c-button--block']]: block,
		[styles['c-button--icon']]: icon && !label,
		[styles[`c-button--${type}`]]: type,
		[skins['c-button--active']]: active,
		[skins[`c-button--${type}`]]: type,
	});

	const handleButtonClick = (evt: MouseEvent<HTMLElement>) => {
		if (!disabled && onClick) {
			onClick(evt);
		}
	};

	const renderButton = () => {
		return (
			<button
				className={rootCls}
				onClick={handleButtonClick}
				disabled={disabled}
				aria-label={ariaLabel}
				title={title}
				id={id}
			>
				{children ? (
					children
				) : (
					<div className={classnames(styles['c-button__content'])}>
						{icon && (
							<Icon
								className={styles['c-button__icon']}
								name={icon}
								active={active}
								type={iconType}
							/>
						)}
						{label && <div className={styles['c-button__label']}>{label}</div>}
						{arrow && <Icon className={styles['c-button__icon']} name="caret-down" />}
					</div>
				)}
			</button>
		);
	};

	if (tooltip && tooltip.trim()) {
		return (
			<Tooltip contentClassName="c-button__tooltip" position="top" offset={20}>
				<TooltipTrigger>
					<span>{renderButton()}</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>{tooltip}</span>
				</TooltipContent>
			</Tooltip>
		);
	}
	return renderButton();
};

export { Button };
