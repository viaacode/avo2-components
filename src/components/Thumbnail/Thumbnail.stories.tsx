import { AvoContentTypeEnglish } from '@viaa/avo2-types';
import { Thumbnail } from './Thumbnail';

export default {
	title: 'components/Thumbnail',

	parameters: {
		jest: ['Thumbnail'],
	},
};

export const ThumbnailImage = () => (
	<div className="o-grid-col-bp3-4">
		<Thumbnail
			src="/images/thumbnail.jpg"
			meta="4 items"
			category={AvoContentTypeEnglish.VIDEO}
			label="video"
		/>
	</div>
);

ThumbnailImage.story = {
	name: 'Thumbnail (image)',
};

export const ThumbnailPlaceholder = () => (
	<div className="o-grid-col-bp3-4">
		<Thumbnail meta="4 items" category={AvoContentTypeEnglish.COLLECTION} label="collection" />
	</div>
);

ThumbnailPlaceholder.story = {
	name: 'Thumbnail (placeholder)',
};

export const ThumbnailWithLabel = () => (
	<div className="o-grid-col-bp3-4">
		<Thumbnail
			src="/images/thumbnail.jpg"
			category={AvoContentTypeEnglish.COLLECTION}
			meta="4 items"
			label="collection"
		/>
	</div>
);

ThumbnailWithLabel.story = {
	name: 'Thumbnail with label',
};

export const ThumbnailWithoutLabel = () => (
	<div className="o-grid-col-bp3-4">
		<Thumbnail src="/images/thumbnail.jpg" category={AvoContentTypeEnglish.BUNDLE} meta="2:22" />
	</div>
);

ThumbnailWithoutLabel.story = {
	name: 'Thumbnail without label',
};

export const ThumbnailWithoutMeta = () => (
	<div className="o-grid-col-bp3-4">
		<Thumbnail src="/images/thumbnail.jpg" category={AvoContentTypeEnglish.AUDIO} label="audio" />
	</div>
);

ThumbnailWithoutMeta.story = {
	name: 'Thumbnail without meta',
};

export const ThumbnailWithShowCategoryIcon = () => (
	<div className="o-grid-col-bp3-4">
		<Thumbnail
			src="/images/thumbnail.jpg"
			category={AvoContentTypeEnglish.AUDIO}
			showCategoryIcon
		/>
	</div>
);

ThumbnailWithShowCategoryIcon.story = {
	name: 'Thumbnail with showCategoryIcon',
};
