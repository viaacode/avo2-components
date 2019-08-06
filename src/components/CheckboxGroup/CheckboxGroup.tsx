import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

export interface CheckboxGroupProps extends DefaultProps {
	inline?: boolean;
	children: ReactNode;
}

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
	children,
	className,
	inline = false,
}: CheckboxGroupProps) => (
	<div
		className={classNames(className, 'c-checkbox-group', {
			'c-checkbox-group--inline': inline,
		})}
	>
		{children}
	</div>
);
