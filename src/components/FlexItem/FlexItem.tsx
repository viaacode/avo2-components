import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

export interface FlexItemProps extends DefaultProps {
	shrink?: boolean;
	children?: ReactNode;
}

export const FlexItem: FunctionComponent<FlexItemProps> = ({ className, shrink, children }) => (
	<div
		className={classNames(className, 'o-flex__item', {
			'o-flex__item--shrink': shrink,
		})}
	>
		{children}
	</div>
);
