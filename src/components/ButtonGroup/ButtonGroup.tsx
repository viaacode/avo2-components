import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './ButtonGroup.scss';

export interface ButtonGroupProps extends DefaultProps {
	children: ReactNode;
}

const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ className = '', children }) => (
	<div className={classNames(className, 'c-button-group')}>{children}</div>
);

export { ButtonGroup };
