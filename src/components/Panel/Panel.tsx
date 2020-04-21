import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { useSlot } from '../../hooks/useSlot';

import { DefaultProps } from '../../types';
import { PanelBody, PanelHeader } from './Panel.slots';

import './Panel.scss';

export interface PanelPropsSchema extends DefaultProps {
	children: ReactNode;
}

export const Panel: FunctionComponent<PanelPropsSchema> = ({ children, className }) => {
	const header = useSlot(PanelHeader, children);
	const body = useSlot(PanelBody, children);

	return (
		<div className={classnames(className, 'c-panel')}>
			{header && <div className="c-panel__header">{header}</div>}
			{body && <div className="c-panel__body">{body}</div>}
			{!header && !body && !!children && children}
		</div>
	);
};
