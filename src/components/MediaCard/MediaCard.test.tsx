import { AvoContentTypeEnglish } from '@viaa/avo2-types';
import { mount, shallow } from 'enzyme';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { MediaCard } from './MediaCard';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

describe('<MediaCard />', () => {
	it('Should be able to render', () => {
		shallow(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.COLLECTION} />
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-media-card-custom';

		const mediaCardComponent = shallow(
			<MediaCard
				className={customClass}
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
			/>
		);

		expect(mediaCardComponent.hasClass(customClass)).toEqual(true);
		expect(mediaCardComponent.hasClass('c-media-card')).toEqual(true);
	});

	it('Should set the correct className for each category', () => {
		const collectionMediaCardComponent = shallow(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.COLLECTION} />
		);

		const videoMediaCardComponent = shallow(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.VIDEO} />
		);

		const audioMediaCardComponent = shallow(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.AUDIO} />
		);

		expect(collectionMediaCardComponent.hasClass('c-media-card--collection')).toEqual(true);
		expect(videoMediaCardComponent.hasClass('c-media-card--video')).toEqual(true);
		expect(audioMediaCardComponent.hasClass('c-media-card--audio')).toEqual(true);
	});

	it('Should set the correct className for each orientation', () => {
		const horizontalMediaCardComponent = shallow(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="horizontal"
			/>
		);

		const verticalMediaCardComponent = shallow(
			<MediaCard
				title="What an amazing title!"
				category={AvoContentTypeEnglish.COLLECTION}
				orientation="vertical"
			/>
		);

		expect(horizontalMediaCardComponent.hasClass('c-media-card--horizontal')).toEqual(true);
		expect(verticalMediaCardComponent.hasClass('c-media-card--horizontal')).toEqual(false);
	});

	it('Should render thumbnail when slot is passed', () => {
		const mediaCardComponent = shallow(
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

		expect(mediaCardComponent.find(Thumbnail)).toHaveLength(1);
	});

	it('Should render metaData when slot is passed', () => {
		const mediaCardComponent = shallow(
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

		expect(mediaCardComponent.find(MetaData)).toHaveLength(1);
		expect(mediaCardComponent.find(MetaDataItem)).toHaveLength(2);
	});

	it('Should render top right when slot is passed', () => {
		const mediaCardComponent = shallow(
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

		expect(mediaCardComponent.find(MetaData)).toHaveLength(1);
		expect(mediaCardComponent.find(MetaDataItem)).toHaveLength(2);
	});

	it('Should pass `href` property to title & thumbnail', () => {
		const clickHandler = jest.fn();

		const mediaCardComponent = mount(
			<MediaCard
				title="What an amazing title!"
				onClick={clickHandler}
				category={AvoContentTypeEnglish.COLLECTION}
			>
				<MediaCardThumbnail>
					<Thumbnail category={AvoContentTypeEnglish.COLLECTION} topRight={<>topRightTest</>} />
				</MediaCardThumbnail>
			</MediaCard>
		);

		const metaCardElement = mediaCardComponent.find('.c-media-card');
		const metaCardTitleElement = mediaCardComponent.find('.c-media-card__title');
		const metaCardThumbElement = mediaCardComponent.find('.c-media-card-thumb');

		metaCardElement.at(0).simulate('click');

		expect(clickHandler).toHaveBeenCalledTimes(1);

		metaCardTitleElement.at(0).simulate('click');

		expect(clickHandler).toHaveBeenCalledTimes(2);

		metaCardThumbElement.at(0).simulate('click');

		expect(clickHandler).toHaveBeenCalledTimes(3);
	});

	it('Should render top right prop on thumbnail', () => {
		const mediaCardComponent = mount(
			<MediaCard title="What an amazing title!" category={AvoContentTypeEnglish.COLLECTION}>
				<MediaCardThumbnail>
					<Thumbnail category={AvoContentTypeEnglish.COLLECTION} topRight={<>topRightTest</>} />
				</MediaCardThumbnail>
			</MediaCard>
		);

		const metaCardThumbTopRight = mediaCardComponent.find('.c-thumbnail-media__top-right');

		expect(metaCardThumbTopRight.text()).toEqual('topRightTest');
	});
});
