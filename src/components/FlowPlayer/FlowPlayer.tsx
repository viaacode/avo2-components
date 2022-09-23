import React, { FunctionComponent, Suspense } from 'react';

import { Flex } from '../Flex/Flex';

import { FlowPlayerPropsSchema } from './FlowPlayer.types';

const FlowplayerInternal = React.lazy(() => import('./FlowPlayer.internal'));

export const FlowPlayer: FunctionComponent<FlowPlayerPropsSchema> = (props) => {
	return (
		<Suspense
			fallback={
				<Flex orientation="horizontal" center>
					Laden ...
				</Flex>
			}
		>
			<FlowplayerInternal {...props} />
		</Suspense>
	);
};
