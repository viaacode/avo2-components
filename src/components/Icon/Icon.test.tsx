import { mount, shallow } from 'enzyme';
import React from 'react';

import { Icon } from './Icon';

import { Download, ThumbsUp } from '../Icons';

describe('<Icon />', () => {
	it('Should render when a known icon is passed', () => {
		const iconComponent = mount(<Icon name="download" />);

		expect(iconComponent.find(Download)).toHaveLength(1);
	});

	it('Should not render when an unknown icon is passed', () => {
		const iconComponent = shallow(<Icon name="foobar" />);

		expect(iconComponent.type()).toEqual(null);
	});

	it('Should render icon when name was passed as PascalCase', () => {
		const iconComponent = mount(<Icon name="ThumbsUp" />);

		expect(iconComponent.find(ThumbsUp)).toHaveLength(1);
	});

	it('Should render icon when name was passed as kebab-case', () => {
		const iconComponent = mount(<Icon name="thumbs-up" />);

		expect(iconComponent.find(ThumbsUp)).toHaveLength(1);
	});

	it('Should correctly set the className without type', () => {
		const iconComponent = shallow(<Icon name="download" />);

		expect(iconComponent.hasClass('o-svg-icon')).toEqual(true);
		expect(iconComponent.hasClass('o-svg-icon--download')).toEqual(true);
	});

	it('Should correctly set the className with type', () => {
		const iconComponent = shallow(<Icon name="twitter" type="social" />);

		expect(iconComponent.hasClass('o-svg-icon')).toEqual(true);
		expect(iconComponent.hasClass('o-svg-icon-social-twitter')).toEqual(true);
	});

	it('Should correctly set the className with type', () => {
		const iconComponent = shallow(<Icon name="circle-check" type="multicolor" />);

		expect(iconComponent.hasClass('o-svg-icon-multicolor')).toEqual(true);
	});
});
