import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps, HeadingType } from '../../types';

export interface HeadingProps extends DefaultProps {
	type: HeadingType;
	onClick?: (() => void) | undefined;
	children: ReactNode;
}

export const Heading: FunctionComponent<HeadingProps> = ({
	className,
	children,
	type: Type,
	onClick,
}) => (
	<Type className={classnames(className, `c-${Type}`)} onClick={onClick}>
		{children}
	</Type>
);
