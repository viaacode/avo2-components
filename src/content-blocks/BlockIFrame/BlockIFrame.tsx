import React, { FunctionComponent, IframeHTMLAttributes } from 'react';

import { AspectRatioWrapper } from '../../components/AspectRatioWrapper/AspectRatioWrapper';
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
	if (iframeProps.src && !/^(http:|https:)?\/\//.test(iframeProps.src)) {
		iframeProps.src = `//${iframeProps.src}`;
	}

	return (
		<AspectRatioWrapper aspect={ratio}>
			<iframe
				title={title}
				allowFullScreen={allowFullScreen}
				frameBorder={frameBorder}
				{...iframeProps}
			/>
		</AspectRatioWrapper>
	);
};
