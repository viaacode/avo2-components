import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface BoxProps {
	condensed?: boolean;
	children: ReactNode;
}

export const Box: FunctionComponent<BoxProps> = ({ condensed, children }: BoxProps) => (
	<div className={classNames('c-box', { 'c-box--padding-small': condensed })}>{children}</div>
);
