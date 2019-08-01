import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

export interface BoxProps extends DefaultProps {
	condensed?: boolean;
	children: ReactNode;
}

export const Box: FunctionComponent<BoxProps> = ({ children, className, condensed }: BoxProps) => (
	<div className={classNames(className, 'c-box', { 'c-box--padding-small': condensed })}>
		{children}
	</div>
);
