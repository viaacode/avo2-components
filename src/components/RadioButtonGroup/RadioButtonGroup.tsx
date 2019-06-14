import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

export interface RadioButtonGroupProps {
	children: ReactNode;
	inline?: boolean;
}

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps> = ({
	children,
	inline,
}: RadioButtonGroupProps) => (
	<div className={classnames('c-radio-group', { 'c-radio-group--inline': inline })}>{children}</div>
);
