import { shallow } from 'enzyme';
import React from 'react';

import { Thumbnail } from './Thumbnail';

describe('<Thumbnail />', () => {
	it('Should be able to render', () => {
		shallow(<Thumbnail href="#" icon="video" />);
	});

	it('Should set the correct className', () => {
		const thumbnailComponent = shallow(<Thumbnail href="#" icon="video" />);

		expect(thumbnailComponent.hasClass('c-media-card')).toEqual(true);
	});
});
