import React from 'react';

import { storiesOf } from '@storybook/react';

import { MOCK_FLOW_PLAYER_PROPS } from '../../components/FlowPlayer/FlowPlayer.mock';

import { BlockVideo } from './BlockVideo';

storiesOf('blocks/BlockVideo', module)
	.addParameters({ jest: ['BlockVideo'] })
	.add('BlockVideo', () => <BlockVideo flowPlayerProps={MOCK_FLOW_PLAYER_PROPS} />);
