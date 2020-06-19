import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockMediaList } from './BlockMediaList';
import {
	MEDIA_LIST_COLORED_CTA_MOCK,
	MEDIA_LIST_CTA_MOCK,
	MEDIA_LIST_CTA_MOCK_WITHOUT_BUTTONS,
	MEDIA_LIST_IMAGE_CTA_MOCK,
	MEDIA_LIST_MOCK,
	MEDIA_LIST_TITLE_BUTTON_MOCK,
	MEDIA_LIST_TITLE_MOCK,
} from './BlockMediaList.mock';

storiesOf('blocks/BlockMediaList', module)
	.addParameters({ jest: ['BlockMediaList'] })
	.add('BlockMediaList', () => <BlockMediaList elements={MEDIA_LIST_MOCK} />)
	.add('BlockMediaList with title', () => <BlockMediaList {...MEDIA_LIST_TITLE_MOCK} />)
	.add('BlockMediaList with title and button', () => (
		<BlockMediaList {...MEDIA_LIST_TITLE_BUTTON_MOCK} />
	))
	.add('BlockMediaList with CTA', () => <BlockMediaList {...MEDIA_LIST_CTA_MOCK} />)
	.add('BlockMediaList with CTA without buttons', () => (
		<BlockMediaList {...MEDIA_LIST_CTA_MOCK_WITHOUT_BUTTONS} />
	))
	.add('BlockMediaList with colored CTA', () => (
		<BlockMediaList {...MEDIA_LIST_COLORED_CTA_MOCK} />
	))
	.add('BlockMediaList with image CTA', () => <BlockMediaList {...MEDIA_LIST_IMAGE_CTA_MOCK} />)
	.add('BlockMediaList with CTA full width', () => (
		<BlockMediaList {...MEDIA_LIST_CTA_MOCK} fullWidth />
	));
