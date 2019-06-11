import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import { Icon } from '../Icon/Icon';

export interface DatePickerProps {
	id?: string;
	disabled?: boolean;
	placeholder?: string;
	defaultValue?: Date;
	onChange?: (date: Date) => void;
}

export const DatePicker: FunctionComponent<DatePickerProps> = ({
	id,
	disabled = false,
	placeholder = 'dd/mm/yyyy',
	defaultValue,
	onChange = () => {},
}: DatePickerProps) => {
	const [value, setValue] = useState(defaultValue);

	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const { value: val } = event.target;

		const date = new Date(val);

		if (!isNaN(date.valueOf()) && (!value || date.valueOf() !== value.valueOf())) {
			setValue(date);
			onChange(date);
		}
	}

	function getValue(date: Date) {
		if (date) {
			return date.toISOString().slice(0, 'yyyy-mm-dd'.length);
		}
	}

	return (
		<div className="c-input-with-icon">
			<input
				className="c-input"
				type="date"
				id={id}
				value={getValue(value)}
				disabled={disabled}
				placeholder={placeholder}
				onChange={onValueChange}
			/>
			<Icon name="calendar" />
		</div>
	);
};
