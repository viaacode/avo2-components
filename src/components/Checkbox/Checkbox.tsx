import React, { ChangeEvent, FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface CheckboxPropsSchema extends DefaultProps {
	label: string;
	checked?: boolean;
	id?: string;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
}

export const Checkbox: FunctionComponent<CheckboxPropsSchema> = ({
	className,
	label,
	id,
	disabled = false,
	checked = false,
	onChange = () => {},
}) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const currentCheckedValue = event.target.checked;

		if (currentCheckedValue !== checked) {
			onChange(currentCheckedValue);
		}
	}

	return (
		<div className={classnames(className, 'c-checkbox')}>
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
