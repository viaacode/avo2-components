import React, { FunctionComponent } from 'react';

import { FlowPlayer } from '../../components/FlowPlayer/FlowPlayer';
import { DefaultProps } from '../../types';

export interface BlockFlowPlayerProps extends DefaultProps {
	src: string | null;
	title: string;
	poster?: string;
	token?: string;
	dataPlayerId?: string;
	autoplay?: boolean;
	onInit?: () => void;
}

export const BlockFlowPlayer: FunctionComponent<BlockFlowPlayerProps> = ({
	className,
	...flowPlayerProps
}) => <FlowPlayer className={className} {...flowPlayerProps} />;
