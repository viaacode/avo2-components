import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import type { DefaultProps, VideoAspectRatio } from '../../types/index.js';

import './AspectRatioWrapper.scss';

export interface AspectRatioWrapperPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	aspect?: VideoAspectRatio | number;
}

export const AspectRatioWrapper: FunctionComponent<AspectRatioWrapperPropsSchema> = ({
	aspect = 1.777777,
	children,
	className,
	style,
}) => (
	<div
		className={clsx(
			className,
			'c-aspect-ratio-wrapper',
			!!aspect &&
				typeof aspect === 'string' &&
				`c-aspect-ratio-wrapper--aspect-${(aspect as string).replace(':', '-')}`
		)}
		style={{
			...style,
			...(typeof aspect === 'number'
				? { paddingBottom: `${Math.round(10000 / aspect) / 100}%` }
				: {}),
		}}
	>
		{children}
	</div>
);
