import { fireEvent, render, screen } from '@testing-library/react';
import { AvoContentTypeEnglish } from '@viaa/avo2-types';

import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { MediaCard } from './MediaCard';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

describe('<MediaCard />', () => {
	it('Should be able to render', () => {
		render(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.COLLECTION} />
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-media-card-custom';

		const { container } = render(
			<MediaCard
				className={customClass}
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
			/>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-media-card');
	});

	it('Should set the correct className for each category', () => {
		const { container: collectionContainer } = render(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.COLLECTION} />
		);

		const { container: videoContainer } = render(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.VIDEO} />
		);

		const { container: audioContainer } = render(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.AUDIO} />
		);

		expect(collectionContainer.firstChild).toHaveClass('c-media-card--collection');
		expect(videoContainer.firstChild).toHaveClass('c-media-card--video');
		expect(audioContainer.firstChild).toHaveClass('c-media-card--audio');
	});

	it('Should set the correct className for each orientation', () => {
		const { container: horizontalContainer } = render(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="horizontal"
			/>
		);

		const { container: verticalContainer } = render(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="vertical"
			/>
		);

		expect(horizontalContainer.firstChild).toHaveClass('c-media-card--horizontal');
		expect(verticalContainer.firstChild).not.toHaveClass('c-media-card--horizontal');
	});

	it('Should render thumbnail when slot is passed', () => {
		const { container } = render(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="horizontal"
			>
				<MediaCardThumbnail>
					<Thumbnail category={AvoContentTypeEnglish.COLLECTION} />
				</MediaCardThumbnail>
			</MediaCard>
		);

		expect(container.querySelectorAll('.c-media-card-thumb .c-thumbnail')).toHaveLength(1);
	});

	it('Should render metaData when slot is passed', () => {
		const { container } = render(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="horizontal"
			>
				<MediaCardMetaData>
					<MetaData category={AvoContentTypeEnglish.COLLECTION}>
						<MetaDataItem label="vrt" />
						<MetaDataItem label="2d geleden" />
					</MetaData>
				</MediaCardMetaData>
			</MediaCard>
		);

		expect(container.querySelectorAll('.c-meta-data')).toHaveLength(1);
		expect(screen.getByText('vrt')).toBeInTheDocument();
		expect(screen.getByText('2d geleden')).toBeInTheDocument();
	});

	it('Should render top right when slot is passed', () => {
		const { container } = render(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="horizontal"
			>
				<MediaCardMetaData>
					<MetaData category={AvoContentTypeEnglish.COLLECTION}>
						<MetaDataItem label="vrt" />
						<MetaDataItem label="2d geleden" />
					</MetaData>
				</MediaCardMetaData>
			</MediaCard>
		);

		expect(container.querySelectorAll('.c-meta-data')).toHaveLength(1);
		expect(screen.getByText('vrt')).toBeInTheDocument();
		expect(screen.getByText('2d geleden')).toBeInTheDocument();
	});

	it('Should pass `href` property to title & thumbnail', () => {
		const clickHandler = jest.fn();

		const { container } = render(
			<MediaCard
				title="What an amazing title!"
				onClick={clickHandler}
				category={AvoContentTypeEnglish.COLLECTION}
			>
				<MediaCardThumbnail>
					<Thumbnail
						category={AvoContentTypeEnglish.COLLECTION}
						showCategoryIcon
						topRight={<>topRightTest</>}
					/>
				</MediaCardThumbnail>
			</MediaCard>
		);

		fireEvent.click(container.firstChild as HTMLElement);

		expect(clickHandler).toHaveBeenCalledTimes(1);

		fireEvent.click(screen.getByRole('heading', { name: 'What an amazing title!' }));

		expect(clickHandler).toHaveBeenCalledTimes(2);

		fireEvent.click(container.querySelector('.c-media-card-thumb') as HTMLElement);

		expect(clickHandler).toHaveBeenCalledTimes(3);
	});

	it('Should render top right prop on thumbnail', () => {
		const { container } = render(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.COLLECTION}>
				<MediaCardThumbnail>
					<Thumbnail
						category={AvoContentTypeEnglish.COLLECTION}
						showCategoryIcon
						topRight={<>topRightTest</>}
					/>
				</MediaCardThumbnail>
			</MediaCard>
		);

		expect(container.querySelector('.c-thumbnail-media__top-right')?.textContent).toEqual(
			'topRightTest'
		);
	});
});
