import React from 'react';

import { storiesOf } from '@storybook/react';

import { FlowPlayer } from './FlowPlayer';
import { MOCK_FLOW_PLAYER_PROPS } from './FlowPlayer.mock';

storiesOf('components/FlowPlayer', module)
	.addParameters({ jest: ['FlowPlayer'] })
	.add('FlowPlayer Video', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS} />
		</div>
	))
	.add('FlowPlayer Thumbnail', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS} src={null} />
		</div>
	))
	.add('FlowPlayer Thumbnail met Geknipt', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS} src={null} start={10} end={100} />
		</div>
	));
