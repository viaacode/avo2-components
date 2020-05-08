import { storiesOf } from '@storybook/react';
import React from 'react';

import { MOCK_FLOW_PLAYER_PROPS } from '../../components/FlowPlayer/FlowPlayer.mock';

import { BlockFlowPlayer } from './BlockFlowPlayer';

storiesOf('blocks/BlockFlowPlayer', module)
	.addParameters({ jest: ['BlockFlowPlayer'] })
	.add('BlockFlowPlayer', () => (
		<div className="o-grid-col-bp3-4">
			<BlockFlowPlayer {...MOCK_FLOW_PLAYER_PROPS} />
		</div>
	));
