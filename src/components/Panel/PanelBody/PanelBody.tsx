import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types';

export interface PanelBodyProps extends DefaultProps {
	children: ReactNode;
}

export const PanelBody: FunctionComponent<PanelBodyProps> = ({ children, className }) => {
	return <div className={clsx(className, 'c-panel__body')}>{children}</div>;
};
