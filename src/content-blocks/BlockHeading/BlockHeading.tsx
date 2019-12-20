import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { BlockHeadingType, DefaultProps } from '../../types';

export interface BlockHeadingProps extends DefaultProps {
	type: BlockHeadingType;
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
