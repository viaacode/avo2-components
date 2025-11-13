import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types';

export interface FlexItemPropsSchema extends DefaultProps {
	shrink?: boolean;
	children?: ReactNode;
}

export const FlexItem: FunctionComponent<FlexItemPropsSchema> = ({
	className,
	shrink,
	children,
}) => (
	<div
		className={clsx(className, 'o-flex__item', {
			'o-flex__item--shrink': shrink,
		})}
	>
		{children}
	</div>
);
