import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/Icon.types';
import { Spacer } from '../Spacer/Spacer';

import './Blankslate.scss';

export interface BlankslateProps extends DefaultProps {
	title: string;
	body?: string;
	spacious?: boolean;
	icon?: IconName;
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
	<div className={classnames(className, 'c-blankslate', { 'c-blankslate--spacious': spacious })}>
		{icon && (
			<Spacer margin="bottom-large">
				<div className="c-blankslate__icon">
					<Icon name={icon} size="large" />
				</div>
			</Spacer>
		)}
		<h4 className="c-h4" dangerouslySetInnerHTML={{ __html: title }} />
		{!!body && <p className="c-body-1" dangerouslySetInnerHTML={{ __html: body }} />}
		{children}
	</div>
);
