import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';
import { FlowPlayer, FlowPlayerProps } from '../../FlowPlayer/FlowPlayer';
import { VideoWrapper } from '../../VideoWrapper/VideoWrapper';

export interface BlockVideoProps extends DefaultProps {
	flowPlayerProps: FlowPlayerProps;
}

export const BlockVideo: FunctionComponent<BlockVideoProps> = ({ className, flowPlayerProps }) => {
	return (
		<Container className={className} mode="vertical">
			<VideoWrapper aspect="16:9">
				<FlowPlayer {...flowPlayerProps} />
			</VideoWrapper>
		</Container>
	);
};
