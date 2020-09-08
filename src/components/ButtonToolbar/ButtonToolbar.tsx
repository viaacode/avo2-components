import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

import './ButtonToolbar.scss';

export interface ButtonToolbarPropsSchema extends DefaultProps {
	children: ReactNode;
	wrap?: boolean;
}

const ButtonToolbar: FunctionComponent<ButtonToolbarPropsSchema> = ({
	className = '',
	children,
	wrap = false,
}) => (
	<div
		className={classnames(className, 'c-button-toolbar', {
			'c-button-toolbar__wrap': wrap,
		})}
	>
		{children}
	</div>
);

export { ButtonToolbar };
