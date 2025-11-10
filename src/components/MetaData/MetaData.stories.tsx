import { storiesOf } from '@storybook/react';
import { Avo } from '@viaa/avo2-types';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { MetaData } from './MetaData.js';
import { MetaDataItem } from './MetaDataItem/MetaDataItem.js';

storiesOf('components/MetaData', module)
	.addParameters({ jest: ['MetaData'] })
	.add('Meta data (audio)', () => (
		<MetaData category={Avo.ContentType.English.AUDIO}>
			<MetaDataItem label="VRT" />
			<MetaDataItem icon={IconNameSchema.headphone} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (video)', () => (
		<MetaData category={Avo.ContentType.English.VIDEO}>
			<MetaDataItem label="VRT" />
			<MetaDataItem icon={IconNameSchema.eye} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (collection)', () => (
		<MetaData category={Avo.ContentType.English.COLLECTION}>
			<MetaDataItem label="7 items" />
			<MetaDataItem icon={IconNameSchema.eye} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (bundle)', () => (
		<MetaData category={Avo.ContentType.English.BUNDLE}>
			<MetaDataItem label="7 items" />
			<MetaDataItem icon={IconNameSchema.eye} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	));
