import { storiesOf } from '@storybook/react';

import { IconNameSchema } from '../../Icon/Icon.types.js';
import { MetaData } from '../MetaData.js';

import { MetaDataItem } from './MetaDataItem.js';

storiesOf('components/MetaDataItem', module)
	.addParameters({ jest: ['MetaDataItem'] })
	.add('Meta data item', () => (
		<MetaData category="video">
			<MetaDataItem label="VRT" />
		</MetaData>
	))
	.add('Meta data item with icon', () => (
		<MetaData category="audio">
			<MetaDataItem icon={IconNameSchema.headphone} label="768" />
		</MetaData>
	));
