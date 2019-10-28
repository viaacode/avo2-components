import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

export interface TextProps extends DefaultProps {
	children: ReactNode;
}

export const Text: FunctionComponent<TextProps> = ({ className, children }) => (
	<div className={className}>{children}</div>
);
