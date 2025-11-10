import { action } from 'storybook/actions';
import { storiesOf } from '@storybook/react';
import { Avo } from '@viaa/avo2-types';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { MetaData } from '../MetaData/MetaData.js';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem.js';
import { Thumbnail } from '../Thumbnail/Thumbnail.js';
import { MediaCard } from './MediaCard.js';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots.js';

storiesOf('components/MediaCard', module)
	.addParameters({ jest: ['MediaCard'] })
	.add('Media card (vertical)', () => (
		<div className="o-grid-col-bp3-4">
			<MediaCard
				title="What an amazing title!"
				onClick={action('clicked on media card')}
				category={Avo.ContentType.English.COLLECTION}
				orientation="vertical"
			>
				<MediaCardThumbnail>
					<Thumbnail
						category={Avo.ContentType.English.COLLECTION}
						src="/images/thumbnail.jpg"
						meta="7 items"
						topRight={<div onClick={action('clicked on source')}>{'Bron >'}</div>}
						label="collection"
						alt="What an amazing thumbnail!"
					/>
				</MediaCardThumbnail>
				<MediaCardMetaData>
					<MetaData category={Avo.ContentType.English.COLLECTION}>
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
			category={Avo.ContentType.English.COLLECTION}
			orientation="horizontal"
		>
			<MediaCardThumbnail>
				<Thumbnail
					category={Avo.ContentType.English.COLLECTION}
					src="/images/thumbnail.jpg"
					meta="7 items"
					topRight={<div onClick={action('clicked on source')}>{'Bron >'}</div>}
					label="collection"
					alt="What an amazing thumbnail!"
				/>
			</MediaCardThumbnail>
			<MediaCardMetaData>
				<MetaData category={Avo.ContentType.English.COLLECTION}>
					<MetaDataItem label="vrt" />
					<MetaDataItem label="728" icon={IconNameSchema.eye} />
					<MetaDataItem label="2d geleden" />
				</MetaData>
			</MediaCardMetaData>
		</MediaCard>
	));
