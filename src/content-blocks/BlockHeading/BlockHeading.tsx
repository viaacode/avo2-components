import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps, HeadingType } from '../../types';

export interface BlockHeadingProps extends DefaultProps {
	type: HeadingType;
	onClick?: (() => void) | undefined;
	children: ReactNode;
}

export const BlockHeading: FunctionComponent<BlockHeadingProps> = ({
	className,
	children,
	type: Type,
	onClick,
}) => (
	<Type className={classnames(className, `c-${Type}`)} onClick={onClick}>
		{children}
	</Type>
);
