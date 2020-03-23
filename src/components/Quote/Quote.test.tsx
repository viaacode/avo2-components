import React from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { Quote } from './Quote';

const customClass = 'c-block-custom';
const quote = loremIpsum({ count: 10 });
const authorImage = '/images/50x50.svg';
const authorName = loremIpsum({ count: 2 });
const authorInitials = 'AE';

export const quoteExample = (
	<Quote
		className={customClass}
		quote={quote}
		authorImage={authorImage}
		authorName={authorName}
		authorInitials={authorInitials}
	/>
);

describe('<Quote />', () => {
	it('Should be able to render', () => {
		shallow(quoteExample);
	});

	it('Should render the quote text correctly', () => {
		const component = shallow(quoteExample);

		const quoteElement = component.find('blockquote');

		expect(quoteElement.html()).toContain(`>${quote}<`);
	});

	it('Should render the author name correctly', () => {
		const component = shallow(quoteExample);

		const spanElement = component.find('span');

		expect(spanElement.html()).toContain(`>${authorName}<`);
	});

	it('Should set the correct className', () => {
		const component = mount(quoteExample);

		const verticalWrapper = component.find('.o-container-vertical');
		const quoteDivElement = component.find('.c-quote');
		const quoteElement = quoteDivElement.find('blockquote');
		const citeElement = quoteDivElement.find('cite');

		expect(verticalWrapper).toHaveLength(1);
		expect(verticalWrapper.hasClass(customClass)).toBeTruthy();
		expect(verticalWrapper.hasClass('o-container-vertical-quote')).toBeTruthy();

		expect(quoteDivElement).toHaveLength(1);
		expect(quoteElement.hasClass('c-quote__text')).toBeTruthy();
		expect(citeElement.hasClass('c-quote__author')).toBeTruthy();
	});
});
