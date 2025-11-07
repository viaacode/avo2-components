import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types/index.js';

export interface PanelHeaderProps extends DefaultProps {
	children: ReactNode;
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({ children, className }) => {
	return <div className={clsx(className, 'c-panel__header')}>{children}</div>;
};
