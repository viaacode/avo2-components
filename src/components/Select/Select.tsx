import React, { ChangeEvent, FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends DefaultProps {
	options: SelectOption[];
	id?: string;
	disabled?: boolean;
	value?: string;
	onChange?: (value: string) => void;
}

export const Select: FunctionComponent<SelectProps> = ({
	className,
	options,
	id,
	disabled = false,
	value,
	onChange = () => {},
}) => {
	function onValueChange(event: ChangeEvent<HTMLSelectElement>) {
		onChange(event.target.value);
	}

	return (
		<div className={classnames(className, 'c-select-holder')}>
			<select
				className="c-select"
				id={id}
				value={value}
				disabled={disabled}
				onChange={onValueChange}
			>
				{options.map(({ value, label, disabled }, index) => (
					<option key={index} value={value} disabled={disabled}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};
