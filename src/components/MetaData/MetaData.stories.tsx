import React from 'react';

import { storiesOf } from '@storybook/react';

import { MetaData } from './MetaData';

storiesOf('MetaData', module)
	.addParameters({ jest: ['MetaData'] })
	.add('Meta data (collection)', () => (
		<MetaData meta="5 items" category="collection" impressions={738} postedOn="2d geleden" />
	))
	.add('Meta data (video)', () => (
		<MetaData meta="VRT" category="video" impressions={738} postedOn="2d geleden" />
	))
	.add('Meta data (audio)', () => (
		<MetaData meta="VRT" category="audio" impressions={738} postedOn="2d geleden" />
	));
