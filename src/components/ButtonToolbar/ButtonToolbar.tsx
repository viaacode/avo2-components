import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './ButtonToolbar.scss';

export interface ButtonToolbarProps extends DefaultProps {
	children: ReactNode;
}

const ButtonToolbar: FunctionComponent<ButtonToolbarProps> = ({ className = '', children }) => (
	<div className={classNames(className, 'c-button-toolbar')}>{children}</div>
);

export { ButtonToolbar };
