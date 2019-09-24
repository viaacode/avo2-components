import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import './Blankslate.scss';

export interface BlankslateProps extends DefaultProps {
	title: string;
	body: string;
	spacious?: boolean;
	icon?: string;
	children?: ReactNode;
}

export const Blankslate: FunctionComponent<BlankslateProps> = ({
	body,
	children,
	className,
	icon,
	spacious,
	title,
}) => (
	<div className={classNames(className, 'c-blankslate', { 'c-blankslate--spacious': spacious })}>
		{icon && (
			<div className="u-spacer-bottom-l">
				<div className="c-blankslate__icon">
					<Icon name={icon} size="large" />
				</div>
			</div>
		)}
		<h4 className="c-h4">{title}</h4>
		<p className="c-body-1">{body}</p>
		{children}
	</div>
);
