import clsx from 'clsx';
import React, { ChangeEvent, FunctionComponent } from 'react';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';
import { Button } from '../Button/Button';

import './FileInput.scss';

export interface FileInputProps extends DefaultProps {
	children?: React.ReactNode;
	id?: string;
	disabled?: boolean;
	placeholder?: string;
	ariaLabel?: string;
	onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: FunctionComponent<FileInputProps> = ({
	className,
	id,
	disabled,
	placeholder = 'Upload',
	ariaLabel = '',
	onChange = noop,
}) => {
	return (
		<Button
			className={clsx('c-button--file', className)}
			type="secondary"
			disabled={disabled}
			ariaLabel={ariaLabel || placeholder}
		>
			<div className="c-button__label">{placeholder}</div>
			<input
				type="file"
				id={id}
				disabled={disabled}
				{...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
				onChange={onChange}
			/>
		</Button>
	);
};
