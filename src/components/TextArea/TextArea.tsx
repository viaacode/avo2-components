import autosize from 'autosize';
import clsx from 'clsx';
import React, { ChangeEvent, FunctionComponent, useEffect } from 'react';

import { noop } from '../../helpers/noop.js';
import { useCallbackRef } from '../../hooks/useCallbackRef.js';
import { DefaultProps } from '../../types/index.js';

export interface TextAreaPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	id?: string;
	name?: string;
	rows?: number;
	disabled?: boolean;
	placeholder?: string;
	value?: string;
	height?: 'auto' | 'small' | 'medium' | 'large';
	width?: 'xsmall' | 'small' | 'medium' | 'large';
	onChange?: (value: string) => void;
	onBlur?: () => void;
	onFocus?: () => void;
}

export const TextArea: FunctionComponent<TextAreaPropsSchema> = ({
	className,
	id,
	name,
	rows,
	disabled = false,
	placeholder,
	value = '',
	height,
	width,
	onChange = noop,
	onBlur = noop,
	onFocus = noop,
}) => {
	const [textArea, textAreaRef] = useCallbackRef<HTMLTextAreaElement>();

	useEffect(() => {
		if (height === 'auto' && textArea) {
			autosize(textArea);
		}
	}, [height, textArea, textAreaRef]);

	function onValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
		onChange(event.target.value);
	}

	return (
		<textarea
			className={clsx(className, 'c-input', {
				[`c-input--h-${height}`]: height && height !== 'auto',
				[`c-input--w-${width}`]: width,
			})}
			id={id}
			name={name}
			rows={rows}
			disabled={disabled}
			placeholder={placeholder}
			value={value}
			onChange={onValueChange}
			onBlur={onBlur}
			onFocus={onFocus}
			ref={textAreaRef}
		/>
	);
};
