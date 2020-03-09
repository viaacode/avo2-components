import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './Form.scss';

export interface FormProps extends DefaultProps {
	type?: 'standard' | 'horizontal' | 'inline';
	children: ReactNode;
}

export const Form: FunctionComponent<FormProps> = ({ className, type = 'standard', children }) => (
	<div className={classnames(className, 'o-form-group-layout', `o-form-group-layout--${type}`)}>
		{children}
	</div>
);
