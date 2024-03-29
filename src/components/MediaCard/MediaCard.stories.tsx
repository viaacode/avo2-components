import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Thumbnail } from '../Thumbnail/Thumbnail';

import { MediaCard } from './MediaCard';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

storiesOf('components/MediaCard', module)
	.addParameters({ jest: ['MediaCard'] })
	.add('Media card (vertical)', () => (
		<div className="o-grid-col-bp3-4">
			<MediaCard
				title="What an amazing title!"
				onClick={action('clicked on media card')}
				category="collection"
				orientation="vertical"
			>
				<MediaCardThumbnail>
					<Thumbnail
						category="collection"
						src="/images/thumbnail.jpg"
						meta="7 items"
						topRight={<div onClick={action('clicked on source')}>{'Bron >'}</div>}
						label="collection"
						alt="What an amazing thumbnail!"
					/>
				</MediaCardThumbnail>
				<MediaCardMetaData>
					<MetaData category="collection">
						<MetaDataItem label="vrt" />
						<MetaDataItem label="728" icon={IconNameSchema.eye} />
						<MetaDataItem label="2d geleden" />
					</MetaData>
				</MediaCardMetaData>
			</MediaCard>
		</div>
	))
	.add('Media card (horizontal)', () => (
		<MediaCard
			title="What an amazing title!"
			onClick={action('clicked on media card')}
			category="collection"
			orientation="horizontal"
		>
			<MediaCardThumbnail>
				<Thumbnail
					category="collection"
					src="/images/thumbnail.jpg"
					meta="7 items"
					topRight={<div onClick={action('clicked on source')}>{'Bron >'}</div>}
					label="collection"
					alt="What an amazing thumbnail!"
				/>
			</MediaCardThumbnail>
			<MediaCardMetaData>
				<MetaData category="collection">
					<MetaDataItem label="vrt" />
					<MetaDataItem label="728" icon={IconNameSchema.eye} />
					<MetaDataItem label="2d geleden" />
				</MetaData>
			</MediaCardMetaData>
		</MediaCard>
	));
