import { Avo } from '@viaa/avo2-types';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { MetaData } from './MetaData.js';
import { MetaDataItem } from './MetaDataItem/MetaDataItem.js';

export default {
	title: 'components/MetaData',

	parameters: {
		jest: ['MetaData'],
	},
};

export const MetaDataAudio = () => (
	<MetaData category={Avo.ContentType.English.AUDIO}>
		<MetaDataItem label="VRT" />
		<MetaDataItem icon={IconNameSchema.headphone} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataAudio.story = {
	name: 'Meta data (audio)',
};

export const MetaDataVideo = () => (
	<MetaData category={Avo.ContentType.English.VIDEO}>
		<MetaDataItem label="VRT" />
		<MetaDataItem icon={IconNameSchema.eye} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataVideo.story = {
	name: 'Meta data (video)',
};

export const MetaDataCollection = () => (
	<MetaData category={Avo.ContentType.English.COLLECTION}>
		<MetaDataItem label="7 items" />
		<MetaDataItem icon={IconNameSchema.eye} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataCollection.story = {
	name: 'Meta data (collection)',
};

export const MetaDataBundle = () => (
	<MetaData category={Avo.ContentType.English.BUNDLE}>
		<MetaDataItem label="7 items" />
		<MetaDataItem icon={IconNameSchema.eye} label="738" />
		<MetaDataItem label="2d geleden" />
	</MetaData>
);

MetaDataBundle.story = {
	name: 'Meta data (bundle)',
};
