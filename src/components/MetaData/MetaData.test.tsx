import { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';
import { mount, shallow } from 'enzyme';
import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from './MetaData';
import { MetaDataItem } from './MetaDataItem/MetaDataItem';

describe('<MetaDataItem />', () => {
	it('Should be able to render', () => {
		shallow(
			<MetaData category={AvoContentTypeEnglish.VIDEO}>
				<MetaDataItem label="VRT" />s
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-meta-data-custom';

		const metaDataComponent = shallow(
			<MetaData category={AvoContentTypeEnglish.VIDEO} className={customClass}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		expect(metaDataComponent.hasClass(customClass)).toEqual(true);
		expect(metaDataComponent.hasClass('c-meta-data')).toEqual(true);
	});

	it('Should set the correct className with each category', () => {
		const metaDataCollectionComponent = shallow(
			<MetaData category={AvoContentTypeEnglish.COLLECTION}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		const metaDataVideoComponent = shallow(
			<MetaData category={AvoContentTypeEnglish.VIDEO}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		const metaDataAudioComponent = shallow(
			<MetaData category={AvoContentTypeEnglish.AUDIO}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		const metaDataMapComponent = shallow(
			<MetaData category={AvoContentTypeEnglish.BUNDLE}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		expect(metaDataCollectionComponent.hasClass('c-meta-data--collection')).toEqual(true);
		expect(metaDataVideoComponent.hasClass('c-meta-data--video')).toEqual(true);
		expect(metaDataAudioComponent.hasClass('c-meta-data--audio')).toEqual(true);
		expect(metaDataMapComponent.hasClass('c-meta-data--bundle')).toEqual(true);
	});

	it('Should set the correct className when spaced is passed', () => {
		const metaDataComponent = shallow(
			<MetaData category={AvoContentTypeEnglish.VIDEO} spaced>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		expect(metaDataComponent.hasClass('c-meta-data--spaced-out')).toEqual(true);
	});

	it('Should correctly pass children', () => {
		const metaDataComponent = mount(
			<MetaData category={AvoContentTypeEnglish.VIDEO}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		const metaDataItems = metaDataComponent.find(MetaDataItem);

		expect(metaDataItems).toHaveLength(3);
	});
});
