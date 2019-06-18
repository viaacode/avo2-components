import React, { ChangeEvent, FunctionComponent, useState } from 'react';

export interface CheckboxProps {
	label: string;
	checked: boolean;
	id?: string;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
	label,
	id,
	disabled = false,
	checked = false,
	onChange = () => {},
}: CheckboxProps) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const { checked: checkedValue } = event.target;

		if (checkedValue !== checked) {
			onChange(checkedValue);
		}
	}

	return (
		<div className="c-checkbox">
			<label>
				<input
					type="checkbox"
					id={id}
					checked={checked}
					disabled={disabled}
					onChange={onValueChange}
				/>
				{label}
			</label>
		</div>
	);
};
