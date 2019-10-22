import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './Heading.scss';

export interface HeadingProps extends DefaultProps {
	type: 'h1' | 'h2' | 'h3' | 'h4';
	children: 'string' | ReactNode;
}

export const Heading: FunctionComponent<HeadingProps> = ({ className, children, ...props }) => (
	<props.type className={classNames(className, `c-${props.type}`)}>{children}</props.type>
);
