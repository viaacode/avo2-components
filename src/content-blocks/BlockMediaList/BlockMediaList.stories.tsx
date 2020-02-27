import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers';

import { BlockMediaList } from './BlockMediaList';
import { MEDIA_LIST_CTA_MOCK, MEDIA_LIST_MOCK } from './BlockMediaList.mock';

storiesOf('blocks/BlockMediaList', module)
	.addParameters({ jest: ['BlockMediaList'] })
	.add('BlockMediaList', () => (
		<BlockMediaList elements={MEDIA_LIST_MOCK} ctaNavigate={action('Clicked media')} />
	))
	.add('BlockMediaList with CTA', () => (
		<BlockMediaList
			elements={MEDIA_LIST_MOCK.slice(0, -1)}
			ctaNavigate={action('Clicked media')}
			{...MEDIA_LIST_CTA_MOCK}
		/>
	));
