import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

export interface BlockVideoProps extends DefaultProps {
	videoSource: string;
}

export const BlockVideo: FunctionComponent<BlockVideoProps> = ({ className, videoSource }) => {
	return (
		<Container className={className} mode="vertical">
			<div className="c-video-wrapper c-video-wrapper--aspect-16-9">
				{/* TODO replace this with the flowplayer video component */}
				<video src={videoSource} />
			</div>
		</Container>
	);
};
