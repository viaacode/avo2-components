import type { ReactNode } from 'react';

import type { TextInputPropsSchema } from '../TextInput/TextInput';

export type StopPropagationObject = { stopPropagation: () => void };
export type StopPropagationFunction = (e: StopPropagationObject) => void;

export interface ContentInputPropsSchema extends TextInputPropsSchema {
	children?: React.ReactNode;
	align?: 'left' | 'right';
	nodeCancel?: ReactNode;
	nodeSubmit?: ReactNode;
	onCancel?: () => void;
	onClose?: () => void;
	onConfirm?: (value: string | ReadonlyArray<string> | number) => void;
	onFocus?: () => void;
	onOpen?: () => void;
	iconStart?: (onOpenHandler: StopPropagationFunction) => ReactNode;
	iconEnd?: (onOpenHandler: StopPropagationFunction) => ReactNode;

	// Taken from viaacode/react-components/src/types/index.ts
	rootClassName?: string;
}
