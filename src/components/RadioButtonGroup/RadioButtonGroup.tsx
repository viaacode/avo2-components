import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface RadioButtonGroupProps extends DefaultProps {
	children: ReactNode;
	inline?: boolean;
}

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps> = ({
	children,
	className,
	inline,
}: RadioButtonGroupProps) => (
	<div className={classnames(className, 'c-radio-group', { 'c-radio-group--inline': inline })}>
		{children}
	</div>
);
