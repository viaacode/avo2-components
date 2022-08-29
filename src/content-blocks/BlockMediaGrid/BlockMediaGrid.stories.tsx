import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { get } from 'lodash-es';
import React, { ReactNode } from 'react';

import { testRenderLink } from '../../helpers/render-link';
import { BlockHeading } from '../BlockHeading/BlockHeading';

import { BlockMediaGrid, MediaListItem } from './BlockMediaGrid';
import {
	MEDIA_LIST_COLORED_CTA_MOCK,
	MEDIA_LIST_CTA_MOCK,
	MEDIA_LIST_CTA_MOCK_WITHOUT_BUTTONS,
	MEDIA_LIST_IMAGE_CTA_MOCK,
	MEDIA_LIST_ITEMS_MOCK,
	MEDIA_LIST_MOCK,
	MEDIA_LIST_TITLE_BUTTON_MOCK,
	MEDIA_LIST_TITLE_MOCK,
} from './BlockMediaGrid.mock';

const openInModal = (mediaListItem: MediaListItem): boolean => {
	return get(mediaListItem, 'itemAction.type') === 'ITEM';
};

const renderMediaCardWrapper = (mediaCard: ReactNode, item: MediaListItem) => {
	if (openInModal(item)) {
		return <div onClick={() => action('open modal for item')(item)}>{mediaCard}</div>;
	}
	return testRenderLink(action('navigate to item'))(item.buttonAction, mediaCard);
};

storiesOf('blocks/BlockMediaGrid', module)
	.addParameters({ jest: ['BlockMediaGrid'] })
	.add('BlockMediaGrid', () => <BlockMediaGrid {...MEDIA_LIST_MOCK} />)
	.add('BlockMediaGrid with title', () => <BlockMediaGrid {...MEDIA_LIST_TITLE_MOCK} />)
	.add('BlockMediaGrid with title and button', () => (
		<BlockMediaGrid {...MEDIA_LIST_TITLE_BUTTON_MOCK} />
	))
	.add('BlockMediaGrid with modal player', () => (
		<BlockMediaGrid
			elements={MEDIA_LIST_ITEMS_MOCK}
			renderLink={testRenderLink(action('BlockMediaGrid with modal player'))}
			renderMediaCardWrapper={renderMediaCardWrapper}
		/>
	))
	.add('BlockMediaGrid with CTA', () => <BlockMediaGrid {...MEDIA_LIST_CTA_MOCK} />)
	.add('BlockMediaGrid with CTA without buttons', () => (
		<BlockMediaGrid {...MEDIA_LIST_CTA_MOCK_WITHOUT_BUTTONS} />
	))
	.add('BlockMediaGrid with colored CTA', () => (
		<BlockMediaGrid {...MEDIA_LIST_COLORED_CTA_MOCK} />
	))
	.add('BlockMediaGrid with image CTA', () => <BlockMediaGrid {...MEDIA_LIST_IMAGE_CTA_MOCK} />)
	.add('BlockMediaGrid with CTA full width', () => (
		<BlockMediaGrid {...MEDIA_LIST_CTA_MOCK} fullWidth />
	))
	.add('BlockMediaGrid few items', () => (
		<>
			<BlockHeading type="h1">one item:</BlockHeading>
			<BlockMediaGrid
				{...MEDIA_LIST_MOCK}
				elements={MEDIA_LIST_MOCK.elements.slice(0, 1)}
				title={undefined}
			/>
			<BlockHeading type="h1">two item:</BlockHeading>
			<BlockMediaGrid
				{...MEDIA_LIST_MOCK}
				elements={MEDIA_LIST_MOCK.elements.slice(0, 2)}
				title={undefined}
			/>
			<BlockHeading type="h1">three item:</BlockHeading>
			<BlockMediaGrid
				{...MEDIA_LIST_MOCK}
				elements={MEDIA_LIST_MOCK.elements.slice(0, 3)}
				title={undefined}
			/>
			<BlockHeading type="h1">four item:</BlockHeading>
			<BlockMediaGrid
				{...MEDIA_LIST_MOCK}
				elements={MEDIA_LIST_MOCK.elements.slice(0, 4)}
				title={undefined}
			/>
			<BlockHeading type="h1">five item:</BlockHeading>
			<BlockMediaGrid
				{...MEDIA_LIST_MOCK}
				elements={MEDIA_LIST_MOCK.elements.slice(0, 5)}
				title={undefined}
			/>
		</>
	));
