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

	it('Should set the correct className for each type', () => {
		const metaDataComponent = shallow(
			<MetaData meta="5 items" category="collection" impressions={738} postedOn="2d geleden" />
		);

		expect(metaDataComponent.hasClass('c-meta-data--collection')).toEqual(true);
	});

	it('Should render 3 items if meta, impressions and postedOn is passed', () => {
		const metaDataComponent = shallow(
			<MetaData meta="VRT" category="video" impressions={738} postedOn="2d geleden" />
		);

		const metaDataItemElements = metaDataComponent.find('.c-meta-data__item');
		expect(metaDataItemElements).toHaveLength(3);
	});

	it('Should not render meta when none is passed', () => {
		const metaDataComponent = shallow(
			<MetaData category="collection" impressions={738} postedOn="2d geleden" />
		);

		const metaDataItemElements = metaDataComponent.find('.c-meta-data__item');
		expect(metaDataItemElements).toHaveLength(2);
	});

	it('Should not render impressions when none is passed', () => {
		const metaDataComponent = shallow(
			<MetaData meta="VRT" category="collection" impressions={738} />
		);

		const metaDataItemElements = metaDataComponent.find('.c-meta-data__item');
		expect(metaDataItemElements).toHaveLength(2);
	});

	it('Should not render postedOn when none is passed', () => {
		const metaDataComponent = shallow(
			<MetaData meta="VRT" category="collection" postedOn="2d geleden" />
		);

		const metaDataItemElements = metaDataComponent.find('.c-meta-data__item');
		expect(metaDataItemElements).toHaveLength(2);
	});
});
