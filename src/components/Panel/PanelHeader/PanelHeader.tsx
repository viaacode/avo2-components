import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../../types/index.js';

export interface PanelHeaderProps extends DefaultProps {
	children: ReactNode;
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({ children, className }) => {
	return <div className={clsx(className, 'c-panel__header')}>{children}</div>;
};
