import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../types/index.js';

import './ButtonGroup.scss';

export interface ButtonGroupPropsSchema extends DefaultProps {
	children: ReactNode;
}

const ButtonGroup: FunctionComponent<ButtonGroupPropsSchema> = ({ className = '', children }) => (
	<div className={clsx(className, 'c-button-group')}>{children}</div>
);

export { ButtonGroup };
