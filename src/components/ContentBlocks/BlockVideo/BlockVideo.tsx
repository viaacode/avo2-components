import React, { FunctionComponent } from 'react';

import { Container } from '../../Container/Container';

export interface BlockVideoProps {
	videoSource: string;
}

export const BlockVideo: FunctionComponent<BlockVideoProps> = ({
	videoSource,
}: BlockVideoProps) => {
	return (
		<Container mode="vertical">
			<div className="c-video-wrapper c-video-wrapper--aspect-16-9">
				{/* TODO replace this with the flowplayer video component */}
				<video src={videoSource} />
			</div>
		</Container>
	);
};
