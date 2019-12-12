import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './ButtonToolbar.scss';

export interface ButtonToolbarProps extends DefaultProps {
	children: ReactNode;
}

const ButtonToolbar: FunctionComponent<ButtonToolbarProps> = ({ className = '', children }) => (
	<div className={classnames(className, 'c-button-toolbar')}>{children}</div>
);

export { ButtonToolbar };
