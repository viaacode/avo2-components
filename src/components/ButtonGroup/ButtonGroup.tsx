import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './ButtonGroup.scss';

export interface ButtonGroupProps extends DefaultProps {
	children: ReactNode;
}

const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ className = '', children }) => (
	<div className={classnames(className, 'c-button-group')}>{children}</div>
);

export { ButtonGroup };
