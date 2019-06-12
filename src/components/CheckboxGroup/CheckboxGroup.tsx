import React, { FunctionComponent, ReactNode } from 'react';

export interface CheckboxGroupProps {
	children: ReactNode;
}

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
	children,
}: CheckboxGroupProps) => <div className="c-checkbox-group">{children}</div>;
