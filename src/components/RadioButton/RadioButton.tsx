import React, { ChangeEvent, FunctionComponent } from 'react';

import classnames from 'classnames';

import { useDeselectEvent } from '../../hooks/useDeselectEvent';
import { DefaultProps } from '../../types';

export interface RadioButtonPropsSchema extends DefaultProps {
	label: string;
	name: string;
	value: string;
	id?: string;
	disabled?: boolean;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

export const RadioButton: FunctionComponent<RadioButtonPropsSchema> = ({
	className,
	label,
	name,
	value,
	id,
	disabled = false,
	checked = false,
	onChange = () => {},
}) => {
	const [dispatchDeselectEvent] = useDeselectEvent(name, value, onDeselect);

	function onDeselect() {
		if (checked) {
			onChange(false);
		}
	}

	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const checkedValue = event.target.checked;

		dispatchDeselectEvent();

		if (checkedValue !== checked) {
			onChange(checkedValue);
		}
	}

	return (
		<div className={classnames(className, 'c-radio')}>
			<label>
				<input
					type="radio"
					name={name}
					value={value}
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
