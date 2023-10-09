import clsx from 'clsx';
import React, { ChangeEvent, FunctionComponent, ReactNode } from 'react';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';

export interface CheckboxPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	label: string | ReactNode;
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
	onChange = noop,
}) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const currentCheckedValue = event.target.checked;

		if (currentCheckedValue !== checked) {
			onChange(currentCheckedValue);
		}
	}

	return (
		<div className={clsx(className, 'c-checkbox')}>
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
