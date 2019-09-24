import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';

export interface ToolbarItemProps extends DefaultProps {
	children: ReactNode;
	grow?: boolean;
}

export const ToolbarItem: FunctionComponent<ToolbarItemProps> = ({
	children,
	grow = false,
	className,
}) => {
	return (
		<div className={classnames(className, 'c-toolbar__item', { 'c-toolbar__item--grow': grow })}>
			{children}
		</div>
	);
};
