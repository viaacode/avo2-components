import React, { ChangeEvent, FunctionComponent, useEffect } from 'react';

import autosize from 'autosize';
import classNames from 'classnames';

import { useCallbackRef } from '../../hooks/useCallbackRef';

export interface TextAreaProps {
	id?: string;
	name?: string;
	rows?: number;
	disabled?: boolean;
	placeholder?: string;
	value?: string;
	height?: 'auto' | 'small' | 'medium' | 'large';
	width?: 'xsmall' | 'small' | 'medium' | 'large';
	onChange?: (value: string) => void;
}

export const TextArea: FunctionComponent<TextAreaProps> = ({
	id,
	name,
	rows,
	disabled = false,
	placeholder,
	value = '',
	height,
	width,
	onChange = () => {},
}) => {
	const [textArea, textAreaRef] = useCallbackRef();

	useEffect(() => {
		if (height === 'auto') {
			autosize(textArea);
		}
	}, [height, textArea, textAreaRef]);

	function onValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
		onChange(event.target.value);
	}

	return (
		<textarea
			className={classNames('c-input', {
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
			ref={textAreaRef}
		/>
	);
};
