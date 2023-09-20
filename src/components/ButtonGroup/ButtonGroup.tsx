import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

import './ButtonGroup.scss';

export interface ButtonGroupPropsSchema extends DefaultProps {
	children: ReactNode;
}

const ButtonGroup: FunctionComponent<ButtonGroupPropsSchema> = ({ className = '', children }) => (
	<div className={clsx(className, 'c-button-group')}>{children}</div>
);

export { ButtonGroup };
