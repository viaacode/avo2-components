import React, { FunctionComponent } from 'react';

import { Container } from '../../components/Container/Container';
import { FlowPlayer, FlowPlayerProps } from '../../components/FlowPlayer/FlowPlayer';
import { VideoWrapper } from '../../components/VideoWrapper/VideoWrapper';
import { DefaultProps } from '../../types';

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
