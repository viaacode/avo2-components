import { storiesOf } from '@storybook/react';
import React from 'react';

import { action } from '../../helpers';

import { BlockMediaList } from './BlockMediaList';
import {
	MEDIA_LIST_COLORED_CTA_MOCK,
	MEDIA_LIST_CTA_MOCK,
	MEDIA_LIST_IMAGE_CTA_MOCK,
	MEDIA_LIST_MOCK,
} from './BlockMediaList.mock';

storiesOf('blocks/BlockMediaList', module)
	.addParameters({ jest: ['BlockMediaList'] })
	.add('BlockMediaList', () => (
		<BlockMediaList elements={MEDIA_LIST_MOCK} ctaNavigate={action('Clicked media')} />
	))
	.add('BlockMediaList with CTA', () => <BlockMediaList {...MEDIA_LIST_CTA_MOCK} />)
	.add('BlockMediaList with colored CTA', () => <BlockMediaList {...MEDIA_LIST_COLORED_CTA_MOCK} />)
	.add('BlockMediaList with image CTA', () => <BlockMediaList {...MEDIA_LIST_IMAGE_CTA_MOCK} />);
