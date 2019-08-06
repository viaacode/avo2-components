import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

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
	<div className={classNames(className, 'c-radio-group', { 'c-radio-group--inline': inline })}>
		{children}
	</div>
);
