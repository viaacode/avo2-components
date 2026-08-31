import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

export interface ModalBackdropProps {
	children?: React.ReactNode;
	visible?: boolean;
	/** A fixed, darker backdrop for Modal's `borderless` variant -- see its own prop doc. */
	borderless?: boolean;
}

export const ModalBackdrop: FunctionComponent<ModalBackdropProps> = ({
	visible = false,
	borderless = false,
}) => (
	<div
		className={clsx('c-modal-backdrop', {
			'c-modal-backdrop--visible': visible,
			'c-modal-backdrop--borderless': borderless,
		})}
	/>
);
