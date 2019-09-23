import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';
import { VideoWrapper } from '../../VideoWrapper/VideoWrapper';

export interface BlockVideoProps extends DefaultProps {
	videoSource: string;
}

export const BlockVideo: FunctionComponent<BlockVideoProps> = ({ className, videoSource }) => {
	return (
		<Container className={className} mode="vertical">
			<VideoWrapper aspect="16:9">
				{/* TODO replace this with the flowplayer video component */}
				<video src={videoSource} />
			</VideoWrapper>
		</Container>
	);
};
