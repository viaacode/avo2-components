import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../types/index.js';

import './Form.scss';

export interface FormPropsSchema extends DefaultProps {
	type?: 'standard' | 'horizontal' | 'inline';
	children: ReactNode;
}

export const Form: FunctionComponent<FormPropsSchema> = ({
	className,
	type = 'standard',
	children,
}) => (
	<div className={clsx(className, 'o-form-group-layout', `o-form-group-layout--${type}`)}>
		{children}
	</div>
);
