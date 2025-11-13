import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';
import ReactSelect, { type ActionMeta } from 'react-select';
import type { CreatableAdditionalProps } from '../../../node_modules/react-select/dist/declarations/src/useCreatable';
import type { StateManagerProps } from '../../../node_modules/react-select/dist/declarations/src/useStateManager';

import { noop } from '../../helpers/noop';
import type { DefaultProps } from '../../types';

import './Select.scss';

export interface SelectOptionSchema<T = string> {
	value: T;
	label: string;
	disabled?: boolean;
}

export interface SelectPropsSchema
	extends DefaultProps,
		Omit<
			StateManagerProps<any, any, any> & CreatableAdditionalProps<any, any>,
			'onChange' | 'value' | 'options'
		> {
	children?: React.ReactNode;
	options: SelectOptionSchema[];
	id?: string;
	disabled?: boolean;
	loading?: boolean;
	clearable?: boolean;
	value?: string | null;
	placeholder?: string;
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
			onChange(changedValue?.value || null);
		}
	}

	return (
		<ReactSelect
			className={clsx('c-select', className)}
			classNamePrefix="c-select"
			id={id}
			options={options}
			value={options.find((option) => option.value === value) || null}
			isMulti={false}
			isDisabled={disabled}
			isLoading={loading}
			isClearable={clearable}
			isOptionDisabled={(option) => (option as SelectOptionSchema).disabled ?? false}
			placeholder={placeholder}
			onChange={onValueChange}
			noOptionsMessage={() => 'Geen opties'}
			loadingMessage={() => 'Bezig met laden'}
			{...{ formatCreateLabel: ((value: string) => `"${value}" aanmaken`) as any }}
			{...props}
		/>
	);
};
