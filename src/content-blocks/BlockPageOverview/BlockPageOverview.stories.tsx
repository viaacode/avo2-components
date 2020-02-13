import { storiesOf } from '@storybook/react';
import React from 'react';

import { AlignOptions } from '../../types';

import { BlockPageOverview } from './BlockPageOverview';
import { BUTTONS_BUILD_NAVIGATE, BUTTONS_MOCK } from './BlockPageOverview.mock';

const tabs = ['alles', ''];

const renderBlockPageOverview = (align?: AlignOptions) => () => (
	<BlockPageOverview
		tabs={[]}
		elements={BUTTONS_MOCK}
		navigate={BUTTONS_BUILD_NAVIGATE}
		align={align}
	/>
);

storiesOf('blocks/BlockPageOverview', module)
	.addParameters({ jest: ['BlockPageOverview'] })
	.add('BlockPageOverview', renderBlockPageOverview())
	.add('BlockPageOverview (left)', renderBlockPageOverview('left'))
	.add('BlockPageOverview (center)', renderBlockPageOverview('center'))
	.add('BlockPageOverview (right)', renderBlockPageOverview('right'));
