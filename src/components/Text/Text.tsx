import React, { FunctionComponent, ReactNode, ReactNodeArray } from 'react';

import { DefaultProps } from '../../types';

export interface TextProps extends DefaultProps {
	children: ReactNode | ReactNodeArray;
}

export const Text: FunctionComponent<TextProps> = ({ className, children }) => (
	<div className={className}>{children}</div>
);
