import { shallow } from 'enzyme';
import React from 'react';

import { MetaData } from './MetaData';

describe('<MetaData />', () => {
	it('Should be able to render', () => {
		shallow(
			<MetaData meta="5 items" category="collection" impressions={738} postedOn="2d geleden" />
		);
	});

	it('Should set the correct className', () => {
		const metaDataComponent = shallow(
			<MetaData meta="5 items" category="collection" impressions={738} postedOn="2d geleden" />
		);

		expect(metaDataComponent.hasClass('c-meta-data')).toEqual(true);
	});

	it('Should render 3 items', () => {
		const metaDataComponent = shallow(
			<MetaData meta="VRT" category="video" impressions={738} postedOn="2d geleden" />
		);

		const metaDataItemElements = metaDataComponent.find('.c-meta-data__item');
		expect(metaDataItemElements).toHaveLength(3);
	});
});
