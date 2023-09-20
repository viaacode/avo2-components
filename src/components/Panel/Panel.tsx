import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { DefaultProps } from '../../types';

import './Panel.scss';
import { PanelBody, PanelHeader } from './Panel.slots';

export interface PanelPropsSchema extends DefaultProps {
	children: ReactNode;
}

export const Panel: FunctionComponent<PanelPropsSchema> = ({ children, className }) => {
	const header = useSlot(PanelHeader, children);
	const body = useSlot(PanelBody, children);

	return (
		<div className={clsx(className, 'c-panel')}>
			{header && <div className="c-panel__header">{header}</div>}
			{body && <div className="c-panel__body">{body}</div>}
			{!header && !body && !!children && children}
		</div>
	);
};
