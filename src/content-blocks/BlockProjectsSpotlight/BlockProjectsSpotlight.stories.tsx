import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers';

import { BlockProjectsSpotlight } from './BlockProjectsSpotlight';
import { MOCK_SPOTLIGHT_PROJECTS } from './BlockProjectsSpotlight.mock';

storiesOf('blocks/BlockProjectsSpotlight', module)
	.addParameters({ jest: ['BlockProjectsSpotlight'] })
	.add('BlockProjectsSpotlight', () => (
		<BlockProjectsSpotlight
			imageInfos={MOCK_SPOTLIGHT_PROJECTS}
			navigate={action('clicked project')}
		/>
	));
