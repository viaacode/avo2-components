import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../types';

import './ButtonToolbar.scss';

export interface ButtonToolbarPropsSchema extends DefaultProps {
	children: ReactNode;
}

const ButtonToolbar: FunctionComponent<ButtonToolbarPropsSchema> = ({
	className = '',
	children,
}) => <div className={clsx(className, 'c-button-toolbar')}>{children}</div>;

export { ButtonToolbar };
