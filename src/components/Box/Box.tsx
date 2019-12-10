import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './Box.scss';

export interface BoxProps extends DefaultProps {
	condensed?: boolean;
	backgroundColor?: 'gray' | 'soft-white' | 'white' | 'dark';
	children: ReactNode;
}

export const Box: FunctionComponent<BoxProps> = ({
	children,
	className,
	condensed,
	backgroundColor = 'gray',
}) => (
	<div
		className={classnames(className, 'c-box', {
			'c-box--padding-small': condensed,
			[`c-box--${backgroundColor}`]: backgroundColor !== 'gray',
		})}
	>
		{children}
	</div>
);
