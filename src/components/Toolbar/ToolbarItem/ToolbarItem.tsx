import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../../types/index.js';

import './ToolbarItem.scss';

export interface ToolbarItemPropsSchema extends DefaultProps {
	children: ReactNode;
	grow?: boolean;
}

export const ToolbarItem: FunctionComponent<ToolbarItemPropsSchema> = ({
	children,
	grow = false,
	className,
}) => {
	return (
		<div className={clsx(className, 'c-toolbar__item', { 'c-toolbar__item--grow': grow })}>
			{children}
		</div>
	);
};
