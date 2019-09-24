import React, { FunctionComponent, IframeHTMLAttributes } from 'react';

import { VideoAspectRatio } from '../../../types';
import { VideoWrapper } from '../../VideoWrapper/VideoWrapper';

import './BlockIframe.scss';

export interface BlockIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
	title: string;
	ratio?: VideoAspectRatio;
}

export const BlockIframe: FunctionComponent<BlockIframeProps> = ({
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
