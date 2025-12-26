import { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';
import { action } from 'storybook/actions';
import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { MediaCard } from './MediaCard';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

export default {
	title: 'components/MediaCard',

	parameters: {
		jest: ['MediaCard'],
	},
};

export const MediaCardVertical = () => (
	<div className="o-grid-col-bp3-4">
		<MediaCard
			title="What an amazing title!"
			onClick={action('clicked on media card')}
			category={AvoContentTypeEnglish.COLLECTION}
			orientation="vertical"
		>
			<MediaCardThumbnail>
				<Thumbnail
					category={AvoContentTypeEnglish.COLLECTION}
					src="/images/thumbnail.jpg"
					meta="7 items"
					topRight={<div onClick={action('clicked on source')}>{'Bron >'}</div>}
					label="collection"
					alt="What an amazing thumbnail!"
				/>
			</MediaCardThumbnail>
			<MediaCardMetaData>
				<MetaData category={AvoContentTypeEnglish.COLLECTION}>
					<MetaDataItem label="vrt" />
					<MetaDataItem label="728" icon={IconNameSchema.eye} />
					<MetaDataItem label="2d geleden" />
				</MetaData>
			</MediaCardMetaData>
		</MediaCard>
	</div>
);

MediaCardVertical.story = {
	name: 'Media card (vertical)',
};

export const MediaCardHorizontal = () => (
	<MediaCard
		title="What an amazing title!"
		onClick={action('clicked on media card')}
		category={AvoContentTypeEnglish.COLLECTION}
		orientation="horizontal"
	>
		<MediaCardThumbnail>
			<Thumbnail
				category={AvoContentTypeEnglish.COLLECTION}
				src="/images/thumbnail.jpg"
				meta="7 items"
				topRight={<div onClick={action('clicked on source')}>{'Bron >'}</div>}
				label="collection"
				alt="What an amazing thumbnail!"
			/>
		</MediaCardThumbnail>
		<MediaCardMetaData>
			<MetaData category={AvoContentTypeEnglish.COLLECTION}>
				<MetaDataItem label="vrt" />
				<MetaDataItem label="728" icon={IconNameSchema.eye} />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		</MediaCardMetaData>
	</MediaCard>
);

MediaCardHorizontal.story = {
	name: 'Media card (horizontal)',
};
