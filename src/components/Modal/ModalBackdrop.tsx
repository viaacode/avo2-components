import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

export interface ModalBackdropProps {
	visible?: boolean;
}

export const ModalBackdrop: FunctionComponent<ModalBackdropProps> = ({ visible = false }) => (
	<div className={classnames('c-modal-backdrop', { 'c-modal-backdrop--visible': visible })} />
);
