import React from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockQuote } from './BlockQuote';

const customClass = 'c-block-custom';
const quoteText = loremIpsum({ count: 10 });
const authorAvatarSource = '/images/50x50.svg';
const authorName = loremIpsum({ count: 2 });

export const quoteExample = (
	<BlockQuote
		className={customClass}
		quoteText={quoteText}
		authorAvatarSource={authorAvatarSource}
		authorName={authorName}
	/>
);

describe('<BlockQuote />', () => {
	it('Should be able to render', () => {
		shallow(quoteExample);
	});

	it('Should render the quote text correctly', () => {
		const component = shallow(quoteExample);

		const blockQuoteElement = component.find('blockquote');

		expect(blockQuoteElement.html()).toContain(`>${quoteText}<`);
	});

	it('Should render the avatar correctly', () => {
		const component = shallow(quoteExample);

		const imgElement = component.find('img');

		expect(imgElement.prop('src')).toEqual(authorAvatarSource);
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
		const blockquoteElement = quoteDivElement.find('blockquote');
		const citeElement = quoteDivElement.find('cite');

		expect(verticalWrapper).toHaveLength(1);
		expect(verticalWrapper.hasClass(customClass)).toBeTruthy();
		expect(verticalWrapper.hasClass('o-container-vertical-quote')).toBeTruthy();

		expect(quoteDivElement).toHaveLength(1);
		expect(blockquoteElement.hasClass('c-quote__text')).toBeTruthy();
		expect(citeElement.hasClass('c-quote__author')).toBeTruthy();
	});
});
