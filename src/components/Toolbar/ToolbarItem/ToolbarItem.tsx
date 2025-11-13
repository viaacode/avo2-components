import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types';

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
