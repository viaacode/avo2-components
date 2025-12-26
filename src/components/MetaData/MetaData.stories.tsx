import { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';
import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from './MetaData';
import { MetaDataItem } from './MetaDataItem/MetaDataItem';

export default {
	title: 'components/MetaData',

	parameters: {
		jest: ['MetaData'],
	},
};

export const MetaDataAudio = () => (
	<MetaData category={AvoContentTypeEnglish.AUDIO}>
		<MetaDataItem label="VRT" />
		<MetaDataItem icon={IconNameSchema.headphone} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataAudio.story = {
	name: 'Meta data (audio)',
};

export const MetaDataVideo = () => (
	<MetaData category={AvoContentTypeEnglish.VIDEO}>
		<MetaDataItem label="VRT" />
		<MetaDataItem icon={IconNameSchema.eye} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataVideo.story = {
	name: 'Meta data (video)',
};

export const MetaDataCollection = () => (
	<MetaData category={AvoContentTypeEnglish.COLLECTION}>
		<MetaDataItem label="7 items" />
		<MetaDataItem icon={IconNameSchema.eye} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataCollection.story = {
	name: 'Meta data (collection)',
};

export const MetaDataBundle = () => (
	<MetaData category={AvoContentTypeEnglish.BUNDLE}>
		<MetaDataItem label="7 items" />
		<MetaDataItem icon={IconNameSchema.eye} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataBundle.story = {
	name: 'Meta data (bundle)',
};
