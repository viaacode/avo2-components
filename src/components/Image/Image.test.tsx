import { shallow } from 'enzyme';
import React from 'react';

import image500x200 from '../../../static/images/500x200.jpg';

import { Image } from './Image';

describe('<Image />', () => {
	it('Should be able to render', () => {
		shallow(<Image src={image500x200} alt="dummy image 500 by 200" />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-image-custom';

		const imageComponent = shallow(
			<Image className={customClass} src={image500x200} alt="dummy image 500 by 200" />
		);

		expect(imageComponent.hasClass(customClass)).toEqual(true);
		expect(imageComponent.hasClass('c-image')).toEqual(true);
		expect(imageComponent.hasClass('c-image--full')).toEqual(false);
	});

	it('Should set the correct className in wide mode', () => {
		const imageComponent = shallow(
			<Image src={image500x200} alt="dummy image 500 by 200" wide />
		);

		expect(imageComponent.hasClass('c-image--full')).toEqual(true);
	});

	it('Should correctly pass on `src` and `alt` to the img tag', () => {
		const src = image500x200;
		const alt = 'image showing the default dimensions on a grey background';

		const imageComponent = shallow(<Image src={src} alt={alt} />);

		const imageElement = imageComponent.find('img');

		expect(imageElement.prop('src')).toEqual(src);
		expect(imageElement.prop('alt')).toEqual(alt);
	});
});
