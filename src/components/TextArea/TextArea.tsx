import React, { ChangeEvent, FunctionComponent, useEffect } from 'react';

import autosizer from 'autosize';
import classNames from 'classnames';

import { useCallbackRef } from '../../hooks/useCallbackRef';

export interface TextAreaProps {
	id?: string;
	rows?: number;
	disabled?: boolean;
	placeholder?: string;
	value?: string;
	size?: 'small' | 'medium' | 'large';
	autosize?: boolean;
	onChange?: (value: string) => void;
}

export const TextArea: FunctionComponent<TextAreaProps> = ({
	id,
	rows,
	disabled = false,
	placeholder,
	value = '',
	size,
	autosize = false,
	onChange = () => {},
}: TextAreaProps) => {
	const [textArea, textAreaRef] = useCallbackRef();

	useEffect(() => {
		if (autosize) {
			autosizer(textArea);
		}
	}, [autosize, textArea, textAreaRef]);

	function onValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
		onChange(event.target.value);
	}

	return (
		<textarea
			className={classNames('c-input', { [`c-input--h-${size}`]: size })}
			id={id}
			rows={rows}
			disabled={disabled}
			placeholder={placeholder}
			value={value}
			onChange={onValueChange}
			ref={textAreaRef}
		/>
	);
};
