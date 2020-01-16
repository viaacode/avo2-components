import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { AlignOptions, DefaultProps, HeadingType } from '../../types';

export interface BlockHeadingProps extends DefaultProps {
	type: HeadingType;
	onClick?: (() => void) | undefined;
	children: ReactNode;
	align?: AlignOptions;
}

export const BlockHeading: FunctionComponent<BlockHeadingProps> = ({
	className,
	children,
	type: Type,
	onClick,
	align = 'left',
}) => (
	<Type className={classnames(className, `c-${Type}`, `u-text-${align}`)} onClick={onClick}>
		{children}
	</Type>
);
