import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface RadioButtonGroupPropsSchema extends DefaultProps {
	children: ReactNode;
	inline?: boolean;
}

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupPropsSchema> = ({
	children,
	className,
	inline,
}: RadioButtonGroupPropsSchema) => (
	<div className={classnames(className, 'c-radio-group', { 'c-radio-group--inline': inline })}>
		{children}
	</div>
);
