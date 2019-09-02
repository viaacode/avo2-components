import React, { ChangeEvent, FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './Toggle.css';

export interface ToggleProps extends DefaultProps {
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
}

export const Toggle: FunctionComponent<ToggleProps> = ({
	className,
	id,
	checked,
	disabled = false,
	onChange = () => {},
}) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const currentCheckedValue = event.target.checked;

		if (currentCheckedValue !== checked) {
			onChange(currentCheckedValue);
		}
	}

	return (
		<div className={classnames(className, 'c-toggle')}>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				disabled={disabled}
				onChange={onValueChange}
			/>
			<div className="c-toggle__back" />
			<div className="c-toggle__knob" />
		</div>
	);
};
