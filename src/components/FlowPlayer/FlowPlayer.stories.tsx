import React from 'react';

import { storiesOf } from '@storybook/react';

import { MOCK_FLOW_PLAYER_PROPS } from './FlowPlayer.mock';

import { FlowPlayer } from './FlowPlayer';

storiesOf('FlowPlayer', module)
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
	));
