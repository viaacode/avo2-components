import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps, VideoAspectRatio } from '../../types';

import './AspectRatioWrapper.scss';

export interface AspectRatioWrapperProps extends DefaultProps {
	aspect?: VideoAspectRatio;
}

export const AspectRatioWrapper: FunctionComponent<AspectRatioWrapperProps> = ({
	aspect,
	children,
	className,
}) => (
	<div
		className={classnames(
			className,
			'c-aspect-ratio-wrapper',
			!!aspect && `c-aspect-ratio-wrapper--aspect-${aspect.replace(':', '-')}`
		)}
	>
		{children}
	</div>
);
