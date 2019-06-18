import React from 'react';

import { storiesOf } from '@storybook/react';

import { MetaData } from './MetaData';

storiesOf('Meta Data', module)
	.addParameters({ jest: ['MetaData'] })
	.add('Meta data (collection)', () => (
		<MetaData meta="5 items" type="collection" impressions={738} postedOn="2d geleden" />
	))
	.add('Meta data (video)', () => (
		<MetaData meta="VRT" type="video" impressions={738} postedOn="2d geleden" />
	))
	.add('Meta data (audio)', () => (
		<MetaData meta="VRT" type="audio" impressions={738} postedOn="2d geleden" />
	));
