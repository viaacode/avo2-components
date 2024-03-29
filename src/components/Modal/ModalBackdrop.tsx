import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

export interface ModalBackdropProps {
	children?: React.ReactNode;
	visible?: boolean;
}

export const ModalBackdrop: FunctionComponent<ModalBackdropProps> = ({ visible = false }) => (
	<div className={clsx('c-modal-backdrop', { 'c-modal-backdrop--visible': visible })} />
);
