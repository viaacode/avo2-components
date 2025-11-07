import clsx from 'clsx';
import type React from 'react';
import type { ChangeEvent, FunctionComponent } from 'react';

import { noop } from '../../helpers/noop.js';
import type { DefaultProps } from '../../types/index.js';
import { Icon } from '../Icon/Icon.js';
import { IconNameSchema } from '../Icon/Icon.types.js';
import './Toggle.scss';

export interface TogglePropsSchema extends DefaultProps {
	children?: React.ReactNode;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
}

export const Toggle: FunctionComponent<TogglePropsSchema> = ({
	className,
	id,
	checked,
	disabled = false,
	onChange = noop,
}) => {
	function onValueChange(event: ChangeEvent<HTMLInputElement>) {
		const currentCheckedValue = event.target.checked;

		if (currentCheckedValue !== checked) {
			onChange(currentCheckedValue);
		}
	}

	return (
		<div className={clsx(className, 'c-toggle')}>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				disabled={disabled}
				onChange={onValueChange}
			/>
			<div className="c-toggle__back" />
			<div className="c-toggle__knob">
				<Icon
					className="c-toggle__knob__checkmark"
					name={IconNameSchema.check}
					size="small"
				/>
			</div>
		</div>
	);
};
