import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import Select, { ActionMeta } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';

import './TagsInput.scss';

export interface TagInfoSchema {
	label: string;
	value: string | number;
}

export interface TagsInputPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	options: TagInfoSchema[];
	id?: string;
	disabled?: boolean;
	value?: TagInfoSchema[];
	className?: string;
	placeholder?: string;
	allowMulti?: boolean;
	allowCreate?: boolean;
	isLoading?: boolean;
	onChange?: (selectedValues: TagInfoSchema[]) => void;
	onCreate?: (value: TagInfoSchema) => void;
}

export const TagsInput: FunctionComponent<TagsInputPropsSchema> = ({
	options,
	id,
	disabled = false,
	allowMulti = true,
	value = [],
	className = '',
	placeholder = '',
	allowCreate = false,
	isLoading = false,
	onChange = noop,
	onCreate = noop,
}) => {
	function onValueChange(changedValues: any, actionMeta: ActionMeta<TagInfoSchema>) {
		if (actionMeta.action === 'create-option') {
			const tagsToCreate: TagInfoSchema[] = ((changedValues as TagInfoSchema[]) || []).filter(
				(tag) => (tag as any).__isNew__
			);
			if (tagsToCreate[0]) {
				onCreate({
					label: tagsToCreate[0].label,
					value: tagsToCreate[0].value,
				});
			}
		} else {
			if (!changedValues) {
				onChange([]);
			} else if (Array.isArray(changedValues)) {
				onChange(changedValues as TagInfoSchema[]);
			} else {
				onChange([changedValues as TagInfoSchema]);
			}
		}
	}

	const classes = clsx(className, 'c-tags-input');

	return allowCreate ? (
		<CreatableSelect
			options={options}
			className={classes}
			classNamePrefix="c-tags-input"
			id={id}
			value={value}
			isDisabled={disabled}
			placeholder={placeholder}
			isSearchable={true}
			isMulti={allowMulti}
			isLoading={isLoading}
			onChange={onValueChange}
			noOptionsMessage={() => 'Geen opties'}
			loadingMessage={() => 'Bezig met laden'}
			formatCreateLabel={(value: string) => `"${value}" aanmaken`}
		/>
	) : (
		<Select
			options={options}
			className={classes}
			classNamePrefix="c-tags-input"
			id={id}
			value={value}
			isDisabled={disabled}
			placeholder={placeholder}
			isSearchable={true}
			isMulti={allowMulti}
			isLoading={isLoading}
			onChange={onValueChange}
			noOptionsMessage={() => 'Geen opties'}
			loadingMessage={() => 'Bezig met laden'}
			{...{ formatCreateLabel: ((value: string) => `"${value}" aanmaken`) as any }}
		/>
	);
};
