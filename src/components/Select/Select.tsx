import React, { FunctionComponent } from 'react';
import ReactSelect from 'react-select';
import { ActionMeta, ValueType } from 'react-select/src/types';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import { COLORS } from '../../colors';
import './Select.scss';

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends DefaultProps {
	options: SelectOption[];
	id?: string;
	disabled?: boolean;
	loading?: boolean;
	clearable?: boolean;
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
}

export const Select: FunctionComponent<SelectProps> = ({
	className,
	options,
	id,
	disabled = false,
	loading = false,
	clearable = false,
	placeholder,
	value,
	onChange = () => {},
}) => {
	function onValueChange(changedValue: ValueType<SelectOption>, actionMeta: ActionMeta) {
		if (!value) {
			return;
		}
		if (actionMeta.action !== 'create-option') {
			onChange((changedValue as SelectOption).value);
		}
	}

	const styleFunctions = {
		option: (styles: any, options: { isSelected: boolean }) => {
			return {
				...styles,
				backgroundColor: options.isSelected ? COLORS.GRAYSCALE.G200 : styles.backgroundColor,
			};
		},
	};

	return (
		<ReactSelect
			className={classnames('c-select', className)}
			classNamePrefix="c-select"
			id={id}
			options={options}
			defaultValue={options.find(option => option.value === value)}
			isMulti={false}
			isDisabled={disabled}
			isLoading={loading}
			isClearable={clearable}
			placeholder={placeholder}
			styles={styleFunctions}
			onChange={onValueChange}
		/>
	);
};
