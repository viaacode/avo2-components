import { storiesOf } from '@storybook/react';
import { Avo } from '@viaa/avo2-types';
import { IconNameSchema } from '../../Icon/Icon.types.js';
import { MetaData } from '../MetaData.js';
import { MetaDataItem } from './MetaDataItem.js';

storiesOf('components/MetaDataItem', module)
	.addParameters({ jest: ['MetaDataItem'] })
	.add('Meta data item', () => (
		<MetaData category={Avo.ContentType.English.VIDEO}>
			<MetaDataItem label="VRT" />
		</MetaData>
	))
	.add('Meta data item with icon', () => (
		<MetaData category={Avo.ContentType.English.AUDIO}>
			<MetaDataItem icon={IconNameSchema.headphone} label="768" />
		</MetaData>
	));
