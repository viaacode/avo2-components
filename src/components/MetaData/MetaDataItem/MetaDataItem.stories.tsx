import { AvoContentTypeEnglish } from '@viaa/avo2-types';
import { IconNameSchema } from '../../Icon/Icon.types';
import { MetaData } from '../MetaData';
import { MetaDataItem } from './MetaDataItem';

export default {
	title: 'components/MetaDataItem',

	parameters: {
		jest: ['MetaDataItem'],
	},
};

export const _MetaDataItem = () => (
	<MetaData category={AvoContentTypeEnglish.VIDEO}>
		<MetaDataItem label="VRT" />
	</MetaData>
);

_MetaDataItem.story = {
	name: 'Meta data item',
};

export const MetaDataItemWithIcon = () => (
	<MetaData category={AvoContentTypeEnglish.AUDIO}>
		<MetaDataItem icon={IconNameSchema.headphone} label="768" />
	</MetaData>
);

MetaDataItemWithIcon.story = {
	name: 'Meta data item with icon',
};
