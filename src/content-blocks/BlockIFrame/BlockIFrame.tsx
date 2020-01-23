import React, { FunctionComponent, IframeHTMLAttributes } from 'react';

import { VideoWrapper } from '../../components/VideoWrapper/VideoWrapper';
import { VideoAspectRatio } from '../../types';

import './BlockIFrame.scss';

export interface BlockIFrameProps extends IframeHTMLAttributes<HTMLIFrameElement> {
	title: string;
	ratio?: VideoAspectRatio;
}

export const BlockIFrame: FunctionComponent<BlockIFrameProps> = ({
	title,
	ratio,
	allowFullScreen = true,
	frameBorder = 0,
	...iframeProps
}) => {
	return (
		<VideoWrapper aspect={ratio}>
			<iframe
				title={title}
				allowFullScreen={allowFullScreen}
				frameBorder={frameBorder}
				{...iframeProps}
			/>
		</VideoWrapper>
	);
};
