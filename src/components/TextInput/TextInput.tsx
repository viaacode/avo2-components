import React, { ChangeEvent, FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

type Type = 'password' | 'text' | 'email' | 'search' | 'number' | 'tel';

export interface TextInputProps {
	id?: string;
	disabled?: boolean;
	placeholder?: string;
	value?: string;
	icon?: string;
	type?: Type;
	onChange?: (value: string) => void;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
	id,
	disabled = false,
	placeholder,
	value = '',
	icon,
	type = 'text',
	onChange = () => {},
}: TextInputProps) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	return icon ? (
		<div className="c-input-with-icon">
			<input
				className="c-input"
				type={type}
				id={id}
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				onChange={onValueChange}
			/>
			<Icon name={icon} />
		</div>
	) : (
		<input
			className="c-input"
			type={type}
			id={id}
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			onChange={onValueChange}
		/>
	);
};
