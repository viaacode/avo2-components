import autosize from 'autosize';
import clsx from 'clsx';
import type React from 'react';
import { type ChangeEvent, type FunctionComponent, useEffect } from 'react';

import { noop } from '../../helpers/noop';
import { useCallbackRef } from '../../hooks/useCallbackRef';
import type { DefaultProps } from '../../types';

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

	// biome-ignore lint/correctness/useExhaustiveDependencies: not sure if we want to include textAreaRef or not
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
