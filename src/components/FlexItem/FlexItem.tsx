import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface FlexItemProps {
	shrink?: boolean;
	children?: ReactNode;
}

export const FlexItem: FunctionComponent<FlexItemProps> = ({ shrink, children }) => (
	<div
		className={classNames('o-flex__item', {
			'o-flex__item--shrink': shrink,
		})}
	>
		{children}
	</div>
);
