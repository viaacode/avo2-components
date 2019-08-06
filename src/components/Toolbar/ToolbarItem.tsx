import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface ToolbarItemProps extends DefaultProps {
	children: ReactNode;
}

export const ToolbarItem: FunctionComponent<ToolbarItemProps> = ({
	children,
	className,
}: ToolbarItemProps) => {
	return <div className={classnames(className, 'c-toolbar__item')}>{children}</div>;
};
