import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers';

import { BlockMediaList } from './BlockMediaList';
import { MEDIA_LIST_CTA_MOCK, MEDIA_LIST_MOCK } from './BlockMediaList.mock';

storiesOf('blocks/BlockMediaList', module)
	.addParameters({ jest: ['BlockMediaList'] })
	.add('BlockLinks', () => (
		<BlockMediaList elements={MEDIA_LIST_MOCK} navigate={action('Clicked media')} />
	))
	.add('BlockLinks with CTA', () => (
		<BlockMediaList elements={MEDIA_LIST_CTA_MOCK} navigate={action('Clicked media')} />
	));
