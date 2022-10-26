import { storiesOf } from '@storybook/react';
import React from 'react';

import { flowplayerMock } from '../../__mocks__/flowplayer';

import { BlockVideo } from './BlockVideo';

storiesOf('blocks/BlockVideo', module)
	.addParameters({ jest: ['BlockVideo'] })
	.add('BlockVideo', () => <BlockVideo flowPlayerProps={flowplayerMock} />);
