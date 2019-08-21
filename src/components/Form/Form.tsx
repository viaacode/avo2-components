import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

export interface FormGroupProps extends DefaultProps {
	type?: 'standard' | 'horizontal' | 'inline';
	children: ReactNode;
}

export const Form: FunctionComponent<FormGroupProps> = ({
	className,
	type = 'standard',
	children,
}: FormGroupProps) => (
	<div className={classNames(className, 'o-form-group-layout', `o-form-group-layout--${type}`)}>
		{children}
	</div>
);
