import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

export interface ModalBackdropProps {
	children?: React.ReactNode;
	visible?: boolean;
	className?: string;
}

export const ModalBackdrop: FunctionComponent<ModalBackdropProps> = ({
	visible = false,
	className,
}) => (
	<div
		className={clsx('c-modal-backdrop', className, { 'c-modal-backdrop--visible': visible })}
	/>
);
