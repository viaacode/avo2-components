import { storiesOf } from '@storybook/react';
import React from 'react';

import { AlignOptions } from '../../types';

import { BlockButtons } from './BlockButtons';
import { BUTTONS_BUILD_NAVIGATE, BUTTONS_MOCK } from './BlockButtons.mock';

const renderBlockButtons = (align?: AlignOptions) => () => (
	<BlockButtons elements={BUTTONS_MOCK} navigate={BUTTONS_BUILD_NAVIGATE} align={align} />
);

storiesOf('blocks/BlockButtons', module)
	.addParameters({ jest: ['BlockButtons'] })
	.add('BlockButtons', renderBlockButtons())
	.add('BlockButtons (left)', renderBlockButtons('left'))
	.add('BlockButtons (center)', renderBlockButtons('center'))
	.add('BlockButtons (right)', renderBlockButtons('right'));
