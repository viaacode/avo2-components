import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockProjectsSpotlight } from './BlockProjectsSpotlight';
import { MOCK_SPOTLIGHT_PROJECTS } from './BlockProjectsSpotlight.mock';

storiesOf('blocks/BlockProjectsSpotlight', module)
	.addParameters({ jest: ['BlockProjectsSpotlight'] })
	.add('BlockProjectsSpotlight', () => (
		<BlockProjectsSpotlight elements={MOCK_SPOTLIGHT_PROJECTS} />
	));
