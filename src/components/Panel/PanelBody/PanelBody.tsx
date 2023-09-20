import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../../types';

export interface PanelBodyProps extends DefaultProps {
	children: ReactNode;
}

export const PanelBody: FunctionComponent<PanelBodyProps> = ({ children, className }) => {
	return <div className={clsx(className, 'c-panel__body')}>{children}</div>;
};
