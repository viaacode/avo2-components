import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { testRenderLink } from '../../helpers/render-link';

import { BlockSpotlight } from './BlockSpotlight';
import { MOCK_SPOTLIGHT_PROJECTS } from './BlockSpotlight.mock';

storiesOf('blocks/BlockSpotlight', module)
	.addParameters({ jest: ['BlockSpotlight'] })
	.add('BlockSpotlight', () => (
		<BlockSpotlight
			elements={MOCK_SPOTLIGHT_PROJECTS}
			renderLink={testRenderLink(action('Clicked on spotlight item'))}
		/>
	));
