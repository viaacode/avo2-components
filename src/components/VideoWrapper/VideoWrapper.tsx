import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps, VideoAspectRatio } from '../../types';
import './VideoWrapper.scss';

export interface VideoWrapperProps extends DefaultProps {
	aspect?: VideoAspectRatio;
}

export const VideoWrapper: FunctionComponent<VideoWrapperProps> = ({
	aspect,
	children,
	className,
}) => (
	<div
		className={classnames(
			className,
			'c-video-wrapper',
			aspect && `c-video-wrapper--${aspect.replace(':', '-')}`
		)}
	>
		{children}
	</div>
);
