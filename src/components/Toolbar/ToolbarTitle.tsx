import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

export interface ToolbarTitleProps extends DefaultProps {
	children: ReactNode;
}

export const ToolbarTitle: FunctionComponent<ToolbarTitleProps> = ({
	children,
	className,
}: ToolbarTitleProps) => {
	return <h2 className={classnames(className, 'c-toolbar__title')}>{children}</h2>;
};
