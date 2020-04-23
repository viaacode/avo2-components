import { mount, shallow } from 'enzyme';
import React from 'react';

import { IconNameSchema } from './Icon.types';

import { Icon } from './Icon';
import { Download, Slash, ThumbsUp } from './Icons';

describe('<Icon />', () => {
	it('Should render when a known icon is passed', () => {
		const iconComponent = mount(<Icon name="download" />);

		expect(iconComponent.find(Download)).toHaveLength(1);
	});

	it('Should render slash icon when an unknown icon name is passed', () => {
		const iconComponent = shallow(<Icon name={'foobar' as IconNameSchema} />);

		expect(iconComponent.find(Slash)).toHaveLength(1);
	});

	it('Should render icon when name was passed as kebab-case', () => {
		const iconComponent = mount(<Icon name="thumbs-up" />);

		expect(iconComponent.find(ThumbsUp)).toHaveLength(1);
	});

	it('Should correctly pass a custom className', () => {
		const customClass = 'c-icon-custom';

		const iconComponent = shallow(<Icon className={customClass} name="download" />);

		expect(iconComponent.hasClass(customClass)).toEqual(true);
	});

	it('Should correctly set the className without type', () => {
		const iconComponent = shallow(<Icon name="download" />);

		expect(iconComponent.hasClass('o-svg-icon')).toEqual(true);
		expect(iconComponent.hasClass('o-svg-icon--download')).toEqual(true);
	});

	it('Should correctly set the className with type', () => {
		const socialIconComponent = shallow(<Icon name="twitter" type="social" />);
		const multicolorIconComponent = shallow(<Icon name="circle-check" type="multicolor" />);

		expect(socialIconComponent.hasClass('o-svg-icon-social-twitter')).toEqual(true);
		expect(multicolorIconComponent.hasClass('o-svg-icon-multicolor')).toEqual(true);
	});

	it('Should correctly set the subtle class when the subtle option is true', () => {
		const iconComponent = shallow(<Icon name="twitter" subtle />);

		expect(iconComponent.hasClass('o-svg-icon--subtle')).toEqual(true);
	});

	it('Should correctly set the sizing className', () => {
		const smallIconComponent = shallow(<Icon name="circle-check" size="small" />);
		const largeIconComponent = shallow(<Icon name="circle-check" size="large" />);
		const hugeIconComponent = shallow(<Icon name="circle-check" size="huge" />);

		expect(smallIconComponent.hasClass('o-svg-icon--small')).toEqual(true);
		expect(largeIconComponent.hasClass('o-svg-icon--large')).toEqual(true);
		expect(hugeIconComponent.hasClass('o-svg-icon--huge')).toEqual(true);
	});

	it('Should correctly set the className when active', () => {
		const activeIconComponent = shallow(<Icon name="circle-check" active={true} />);
		const inactiveIconComponent = shallow(<Icon name="circle-check" active={false} />);

		expect(activeIconComponent.hasClass('o-svg-icon--action-active')).toEqual(true);
		expect(inactiveIconComponent.hasClass('o-svg-icon--action-active')).toEqual(false);
	});
});
