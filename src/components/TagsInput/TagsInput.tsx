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
	allowMulti?: boolean;
	allowCreate?: boolean;
	isLoading?: boolean;
	onChange?: (selectedValues: TagInfo[]) => void;
	onCreate?: (value: TagInfo) => void;
}

export const TagsInput: FunctionComponent<TagsInputProps> = ({
	options,
	id,
	disabled = false,
	allowMulti = true,
	value = [],
	className = '',
	placeholder = '',
	allowCreate = false,
	isLoading = false,
	onChange = () => {},
	onCreate = () => {},
}) => {
	function onValueChange(changedValues: ValueType<TagInfo>, actionMeta: ActionMeta) {
		if (actionMeta.action === 'create-option') {
			const tagsToCreate: TagInfo[] = ((changedValues as TagInfo[]) || []).filter(
				tag => (tag as any).__isNew__
			);
			if (tagsToCreate[0]) {
				onCreate({
					label: tagsToCreate[0].label,
					value: tagsToCreate[0].value,
				});
			}
		} else {
			onChange(changedValues as TagInfo[]);
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
			defaultValue={value}
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
	);
};
