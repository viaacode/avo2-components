import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types/index.js';
import { Icon } from '../Icon/Icon.js';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { Spacer } from '../Spacer/Spacer.js';

import './Blankslate.scss';

export interface BlankslatePropsSchema extends DefaultProps {
	title: string | ReactNode;
	body?: string | ReactNode;
	spacious?: boolean;
	icon?: IconNameSchema;
	children?: ReactNode;
}

export const Blankslate: FunctionComponent<BlankslatePropsSchema> = ({
	body,
	children,
	className,
	icon,
	spacious,
	title,
}) => (
	<div className={clsx(className, 'c-blankslate', { 'c-blankslate--spacious': spacious })}>
		{icon && (
			<Spacer margin="bottom-large">
				<div className="c-blankslate__icon">
					<Icon name={icon} size="large" />
				</div>
			</Spacer>
		)}
		<h4 className="c-h4">{title}</h4>
		{!!body && <p className="c-body-1">{body}</p>}
		{children}
	</div>
);
