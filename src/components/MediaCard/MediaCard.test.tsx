import { mount, shallow } from 'enzyme';
import React from 'react';

import { MediaCard } from '../MediaCard/MediaCard';

const mockMetaData = [
	{
		label: 'VRT',
	},
	{
		icon: 'eye',
		label: '728',
	},
	{
		label: '2d geleden',
	},
];

describe('<MetaDataItem />', () => {
	it('Should be able to render', () => {
		shallow(<MediaCard title="What an amazing title!" href="#" category="collection" />);
	});

	it('Should set the correct className', () => {
		const mediaCardComponent = shallow(
			<MediaCard title="What an amazing title!" href="#" category="collection" />
		);

		expect(mediaCardComponent.hasClass('c-media-card')).toEqual(true);
	});

	// TODO: Add tests.
});
