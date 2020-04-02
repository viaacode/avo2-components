import { storiesOf } from '@storybook/react';
import React from 'react';

import { AlignOptions } from '../../types';
import { ButtonType } from '../../components';

import { BlockButtons } from './BlockButtons';
import { BUTTONS_MOCK } from './BlockButtons.mock';

const renderBlockButtons = (
	align?: AlignOptions,
	dividers = false,
	type: ButtonType = 'secondary'
) => () => (
	<BlockButtons
		elements={BUTTONS_MOCK.map(button => ({ ...button, type: type }))}
		align={align}
		hasDividers={dividers}
	/>
);

storiesOf('blocks/BlockButtons', module)
	.addParameters({ jest: ['BlockButtons'] })
	.add('BlockButtons', renderBlockButtons())
	.add('BlockButtons (left)', renderBlockButtons('left'))
	.add('BlockButtons (center)', renderBlockButtons('center'))
	.add('BlockButtons (right)', renderBlockButtons('right'))
	.add('BlockButtons (dividers)', renderBlockButtons('left', true, 'link'));
