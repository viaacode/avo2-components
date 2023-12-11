import clsx from 'clsx';
import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema, IconTypeSchema } from '../Icon/Icon.types';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip.slots';

import skins from './Button-skins.module.scss';
import styles from './Button.module.scss';
import { ButtonTypeSchema } from './Button.types';

export interface ButtonPropsSchema extends DefaultProps {
	active?: boolean;
	ariaLabel?: string;
	/**
	 * @deprecated Use iconPosition and renderIcon instead
	 */
	arrow?: boolean;
	autoHeight?: boolean;
	block?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	icon?: IconNameSchema;
	iconType?: IconTypeSchema;
	iconPosition?: 'left' | 'right';
	label?: string;

	onClick?: (event: MouseEvent<HTMLElement>) => void;
	renderIcon?: () => ReactNode;

	size?: 'small' | 'large';
	title?: string;
	altTitle?: string;
	tooltip?: string;
	type?: ButtonTypeSchema | string; // for string values, the prefix c-button is prepended => 'c-button' + value
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
	iconPosition = 'left',
	renderIcon,
}) => {
	const rootCls = clsx(className, {
		// Normal
		['c-button']: true,
		['c-button--active']: active,
		['c-button--auto']: autoHeight,
		['c-button--small']: size === 'small',
		['c-button--large']: size === 'large',
		['c-button--block']: block,
		['c-button--icon']: icon && !label,
		[`c-button--${type}`]: type,

		// Module
		[styles['c-button']]: true,
		[styles['c-button--active']]: active,
		[styles['c-button--auto']]: autoHeight,
		[styles['c-button--small']]: size === 'small',
		[styles['c-button--large']]: size === 'large',
		[styles['c-button--block']]: block,
		[styles['c-button--icon']]: icon && !label,
		[styles[`c-button--${type}`]]: type,

		// Skins
		[skins['c-button']]: true,
		[skins['c-button--active']]: active,
		[skins['c-button--auto']]: autoHeight,
		[skins['c-button--small']]: size === 'small',
		[skins['c-button--large']]: size === 'large',
		[skins['c-button--block']]: block,
		[skins['c-button--icon']]: icon && !label,
		[skins[`c-button--${type}`]]: type,
	});

	const handleButtonClick = (evt: MouseEvent<HTMLElement>) => {
		if (!disabled && onClick) {
			onClick(evt);
		}
	};

	const renderIconElement = (): ReactNode => {
		if (renderIcon) {
			return renderIcon();
		}

		if (!icon) {
			return null;
		}

		return (
			<Icon
				className={clsx(
					'c-button__icon',
					styles['c-button__icon'],
					skins['c-button__icon']
				)}
				name={icon}
				active={active}
				type={iconType}
			/>
		);
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
					<div
						className={clsx(
							'c-button__content',
							styles['c-button__content'],
							skins['c-button__content']
						)}
					>
						{iconPosition === 'left' && renderIconElement()}

						{label && (
							<div
								className={clsx(
									'c-button__label',
									styles['c-button__label'],
									skins['c-button__label']
								)}
							>
								{label}
							</div>
						)}

						{iconPosition === 'right' && renderIconElement()}

						{arrow && (
							<Icon
								className={clsx(
									'c-button__icon',
									styles['c-button__icon'],
									skins['c-button__icon']
								)}
								name={IconNameSchema.caretDown}
							/>
						)}
					</div>
				)}
			</button>
		);
	};

	if (tooltip?.trim()) {
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
