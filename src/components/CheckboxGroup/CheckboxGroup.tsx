import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../types/index.js';

export interface CheckboxGroupPropsSchema extends DefaultProps {
	inline?: boolean;
	children: ReactNode;
}

export const CheckboxGroup: FunctionComponent<CheckboxGroupPropsSchema> = ({
	children,
	className,
	inline = false,
}) => (
	<div
		className={clsx(className, 'c-checkbox-group', {
			'c-checkbox-group--inline': inline,
		})}
	>
		{children}
	</div>
);
