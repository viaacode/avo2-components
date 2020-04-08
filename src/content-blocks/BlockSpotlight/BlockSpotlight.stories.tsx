import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers';

import { BlockSpotlight } from './BlockSpotlight';
import { MOCK_SPOTLIGHT_PROJECTS } from './BlockSpotlight.mock';

storiesOf('blocks/BlockSpotlight', module)
	.addParameters({ jest: ['BlockSpotlight'] })
	.add('BlockSpotlight', () => (
		<BlockSpotlight
			elements={MOCK_SPOTLIGHT_PROJECTS}
			navigate={action('Clicked on spotlight item')}
		/>
	));
