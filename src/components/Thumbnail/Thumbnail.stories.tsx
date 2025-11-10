import { storiesOf } from '@storybook/react';
import { Avo } from '@viaa/avo2-types';
import { Thumbnail } from './Thumbnail.js';

storiesOf('components/Thumbnail', module)
	.addParameters({ jest: ['Thumbnail'] })
	.add('Thumbnail (image)', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail
				src="/images/thumbnail.jpg"
				meta="4 items"
				category={Avo.ContentType.English.VIDEO}
				label="video"
			/>
		</div>
	))
	.add('Thumbnail (placeholder)', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail meta="4 items" category={Avo.ContentType.English.COLLECTION} label="collection" />
		</div>
	))
	.add('Thumbnail with label', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail
				src="/images/thumbnail.jpg"
				category={Avo.ContentType.English.COLLECTION}
				meta="4 items"
				label="collection"
			/>
		</div>
	))
	.add('Thumbnail without label', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail
				src="/images/thumbnail.jpg"
				category={Avo.ContentType.English.BUNDLE}
				meta="2:22"
			/>
		</div>
	))
	.add('Thumbnail without meta', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail
				src="/images/thumbnail.jpg"
				category={Avo.ContentType.English.AUDIO}
				label="audio"
			/>
		</div>
	))
	.add('Thumbnail with showCategoryIcon', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail
				src="/images/thumbnail.jpg"
				category={Avo.ContentType.English.AUDIO}
				showCategoryIcon
			/>
		</div>
	));
