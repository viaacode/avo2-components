import React from 'react';

import { storiesOf } from '@storybook/react';

import { MOCK_FLOW_PLAYER_PROPS_FULL } from '../../FlowPlayer/FlowPlayer.mock';

import { BlockVideo } from './BlockVideo';

storiesOf('BlockVideo', module)
	.addParameters({ jest: ['BlockVideo'] })
	.add('BlockVideo', () => <BlockVideo flowPlayerProps={MOCK_FLOW_PLAYER_PROPS_FULL} />);
