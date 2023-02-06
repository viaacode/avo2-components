import { storiesOf } from '@storybook/react';
import React from 'react';

import { IconNameSchema } from '../Icon/Icon.types';

import { MetaData } from './MetaData';
import { MetaDataItem } from './MetaDataItem/MetaDataItem';

storiesOf('components/MetaData', module)
	.addParameters({ jest: ['MetaData'] })
	.add('Meta data (audio)', () => (
		<MetaData category="audio">
			<MetaDataItem label="VRT" />
			<MetaDataItem icon={IconNameSchema.headphone} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (video)', () => (
		<MetaData category="video">
			<MetaDataItem label="VRT" />
			<MetaDataItem icon={IconNameSchema.eye} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (collection)', () => (
		<MetaData category="collection">
			<MetaDataItem label="7 items" />
			<MetaDataItem icon={IconNameSchema.eye} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (bundle)', () => (
		<MetaData category="bundle">
			<MetaDataItem label="7 items" />
			<MetaDataItem icon={IconNameSchema.eye} label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	));
