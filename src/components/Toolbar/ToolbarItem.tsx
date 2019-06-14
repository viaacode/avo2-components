import React, { FunctionComponent, ReactNode } from 'react';

export interface ToolbarItemProps {
	children: ReactNode;
}

export const ToolbarItem: FunctionComponent<ToolbarItemProps> = ({
	children,
}: ToolbarItemProps) => {
	return <h2 className="c-toolbar__item">{children}</h2>;
};
