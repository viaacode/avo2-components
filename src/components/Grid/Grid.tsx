import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface GridProps extends DefaultProps {
	children: ReactNode;
}

export const Grid: FunctionComponent<GridProps> = ({ children, className }: GridProps) => (
	<div className={classnames(className, 'o-grid')}>{children}</div>
);
