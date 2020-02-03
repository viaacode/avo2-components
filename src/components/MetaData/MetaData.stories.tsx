import React from 'react';

import { storiesOf } from '@storybook/react';

import { MetaData } from './MetaData';
import { MetaDataItem } from './MetaDataItem/MetaDataItem';

storiesOf('components/MetaData', module)
	.addParameters({ jest: ['MetaData'] })
	.add('Meta data (audio)', () => (
		<MetaData category="audio">
			<MetaDataItem label="VRT" />
			<MetaDataItem icon="headphone" label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (video)', () => (
		<MetaData category="video">
			<MetaDataItem label="VRT" />
			<MetaDataItem icon="eye" label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (collection)', () => (
		<MetaData category="collection">
			<MetaDataItem label="7 items" />
			<MetaDataItem icon="eye" label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	))
	.add('Meta data (bundle)', () => (
		<MetaData category="bundle">
			<MetaDataItem label="7 items" />
			<MetaDataItem icon="eye" label="738" />
			<MetaDataItem label="2d geleden" />
		</MetaData>
	));
