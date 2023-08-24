import classnames from 'clsx';
import { get, noop } from 'lodash-es';
import React, { FunctionComponent } from 'react';
import ReactSelect, { ActionMeta } from 'react-select';

import { DefaultProps } from '../../types';

import './Select.scss';

export interface SelectOptionSchema<T = string> {
	value: T;
	label: string;
	disabled?: boolean;
}

export interface SelectPropsSchema extends DefaultProps {
	options: SelectOptionSchema[];
	id?: string;
	disabled?: boolean;
	loading?: boolean;
	clearable?: boolean;
	value?: string | null;
	placeholder?: string;
	isSearchable?: boolean;
	isClearable?: boolean;
	onChange?: (value: string) => void;
}

export const Select: FunctionComponent<SelectPropsSchema> = ({
	className,
	options,
	id,
	disabled = false,
	loading = false,
	clearable = false,
	placeholder,
	value = null,
	onChange = noop,
	...props
}) => {
	function onValueChange(changedValue: any, actionMeta: ActionMeta<SelectOptionSchema>) {
		if (actionMeta.action !== 'create-option') {
			onChange(get(changedValue, 'value', null));
		}
	}

	return (
		<ReactSelect
			className={classnames('c-select', className)}
			classNamePrefix="c-select"
			id={id}
			options={options}
			value={options.find((option) => option.value === value) || null}
			isMulti={false}
			isDisabled={disabled}
			isLoading={loading}
			isClearable={clearable}
			isOptionDisabled={(option) => !!(option as SelectOptionSchema).disabled}
			placeholder={placeholder}
			onChange={onValueChange}
			noOptionsMessage={() => 'Geen opties'}
			loadingMessage={() => 'Bezig met laden'}
			{...{ formatCreateLabel: ((value: string) => `"${value}" aanmaken`) as any }}
			{...props}
		/>
	);
};
