import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { noop } from '../../helpers/noop.js';
import { DefaultProps } from '../../types/index.js';

export interface RadioButtonPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	label: string;
	name: string;
	value: string;
	id?: string;
	disabled?: boolean;
	checked?: boolean;
	onChange?: (value: string) => void;
}

export const RadioButton: FunctionComponent<RadioButtonPropsSchema> = ({
	label,
	name,
	value,
	id,
	disabled = false,
	checked = false,
	onChange = noop,
	className,
}) => {
	return (
		<div className={clsx(className, 'c-radio')}>
			<label>
				<input
					type="radio"
					name={name}
					value={value}
					id={id}
					checked={checked}
					disabled={disabled}
					onChange={(evt) => onChange(evt.target.value)}
				/>
				{label}
			</label>
		</div>
	);
};
