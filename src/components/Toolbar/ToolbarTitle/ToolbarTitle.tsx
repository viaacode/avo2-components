import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types/index.js';

import './ToolbarTitle.scss';

export interface ToolbarTitlePropsSchema extends DefaultProps {
	children: ReactNode;
}

export const ToolbarTitle: FunctionComponent<ToolbarTitlePropsSchema> = ({
	children,
	className,
}) => {
	return <h2 className={clsx(className, 'c-toolbar__title')}>{children}</h2>;
};
