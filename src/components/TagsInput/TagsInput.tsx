import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, ValueType } from 'react-select/src/types';

import { DefaultProps } from '../../types';

import './TagsInput.scss';

export interface TagInfo {
	label: string;
	value: string | number;
}

export interface TagsInputProps extends DefaultProps {
	options: TagInfo[];
	id?: string;
	disabled?: boolean;
	value?: TagInfo[];
	className?: string;
	placeholder?: string;
	isMulti?: boolean;
	allowCreate?: boolean;
	onChange?: (selectedValues: TagInfo[]) => void;
	onCreate?: (value: TagInfo) => void;
}

export const TagsInput: FunctionComponent<TagsInputProps> = ({
	options,
	id,
	disabled = false,
	isMulti = true,
	value = [],
	className = '',
	placeholder = '',
	allowCreate = false,
	onChange = () => {},
	onCreate = () => {},
}) => {
	function onValueChange(changedValue: ValueType<TagInfo>, actionMeta: ActionMeta) {
		if (!value) {
			return;
		}
		if (actionMeta.action === 'create-option') {
			onCreate(changedValue as TagInfo);
		} else {
			onChange(changedValue as TagInfo[]);
		}
	}

	const classes = classnames(className, 'c-tags-input');

	return allowCreate ? (
		<CreatableSelect
			options={options}
			className={classes}
			classNamePrefix="c-tags-input"
			id={id}
			defaultValue={value}
			isDisabled={disabled}
			placeholder={placeholder}
			isSearchable={true}
			isMulti={isMulti}
			onChange={onValueChange}
		/>
	) : (
		<Select
			options={options}
			className={classes}
			classNamePrefix="c-tags-input"
			id={id}
			defaultValue={value}
			isDisabled={disabled}
			placeholder={placeholder}
			isSearchable={true}
			isMulti={isMulti}
			onChange={onValueChange}
		/>
	);
};
