import React, { FunctionComponent } from 'react';

import { Container } from '../../Container/Container';

export interface BlockVideoProps {
	videoIframeSource: string;
}

export const BlockVideo: FunctionComponent<BlockVideoProps> = ({
	videoIframeSource,
}: BlockVideoProps) => {
	return (
		<Container mode="vertical">
			<div className="c-video-wrapper c-video-wrapper--aspect-16-9">
				{/* tslint:disable */}
				<iframe
					title={videoIframeSource}
					src={videoIframeSource}
					width="640"
					height="100%"
					frameBorder="0"
					allowFullScreen={true}
				/>
				{/* tslint:enable */}
			</div>
		</Container>
	);
};
