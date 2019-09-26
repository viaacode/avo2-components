import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import './Container.scss';

export interface ContainerProps extends DefaultProps {
	mode?: 'horizontal' | 'vertical';
	size?: 'small' | 'medium' | 'large';
	background?: 'white' | 'alt' | 'inverse';
	bordered?: boolean;
	children: ReactNode;
}

export const Container: FunctionComponent<ContainerProps> = ({
	mode,
	size,
	background,
	bordered,
	className,
	children,
}) => (
	<div
		className={classNames(className, {
			'o-container': mode === 'horizontal',
			'o-container-vertical': mode === 'vertical',
			[`o-container--${size}`]: (mode === 'horizontal' || !mode) && size,
			[`o-container-vertical--${size}`]: mode === 'vertical' && size,
			[`o-container-vertical--bg-${background}`]: background,
			'o-container-vertical--bottom-bordered': bordered,
		})}
	>
		{children}
	</div>
);
