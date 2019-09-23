import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './Form.scss';

export interface FormGroupProps extends DefaultProps {
	type?: 'standard' | 'horizontal' | 'inline';
	children: ReactNode;
}

export const Form: FunctionComponent<FormGroupProps> = ({
	className,
	type = 'standard',
	children,
}) => (
	<div className={classNames(className, 'o-form-group-layout', `o-form-group-layout--${type}`)}>
		{children}
	</div>
);
