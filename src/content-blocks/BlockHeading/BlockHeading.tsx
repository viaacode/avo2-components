import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { AlignOptions, DefaultProps, HeadingType } from '../../types';

import './BlockHeading.scss';

export interface BlockHeadingProps extends DefaultProps {
	type: HeadingType;
	color?: string;
	children: ReactNode;
	align?: AlignOptions;
	onClick?: (() => void) | undefined;
}

export const BlockHeading: FunctionComponent<BlockHeadingProps> = ({
	type: Type,
	color,
	children,
	align = 'left',
	onClick,
	className,
}) => (
	<Type
		className={classnames(className, `c-heading c-${Type}`, {
			[`u-text-${align}`]: align !== 'left',
		})}
		onClick={onClick}
		style={color ? { color } : {}}
	>
		{children}
	</Type>
);
