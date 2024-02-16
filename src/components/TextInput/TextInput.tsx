import clsx from 'clsx';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

type InputType = 'password' | 'text' | 'email' | 'search' | 'number' | 'tel' | 'url';

export type TextInputPropsSchema = DefaultProps &
	Partial<Pick<HTMLInputElement, 'maxLength' | 'minLength'>> & {
		children?: React.ReactNode;
		id?: string;
		disabled?: boolean;
		placeholder?: string;
		value?: string;
		icon?: IconNameSchema;
		type?: InputType;
		ariaLabel?: string;
		onChange?: (value: string) => void;
		onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
		onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
		onFocus?: () => void;
	};

export const TextInput: FunctionComponent<TextInputPropsSchema> = ({
	className,
	id,
	disabled = false,
	placeholder,
	value = '',
	icon,
	type = 'text',
	ariaLabel = '',
	onChange = noop,
	onBlur = noop,
	onKeyUp = noop,
	onFocus = noop,
}) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	const classes = clsx(className, icon ? 'c-input-with-icon' : 'c-input');

	return icon ? (
		<div className={classes}>
			<input
				className="c-input"
				type={type}
				id={id}
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				{...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
				onChange={onValueChange}
				onBlur={onBlur}
				onKeyUp={onKeyUp}
				onFocus={onFocus}
			/>
			<Icon name={icon} />
		</div>
	) : (
		<input
			className={classes}
			type={type}
			id={id}
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			{...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
			onChange={onValueChange}
			onBlur={onBlur}
			onKeyUp={onKeyUp}
			onFocus={onFocus}
		/>
	);
};
