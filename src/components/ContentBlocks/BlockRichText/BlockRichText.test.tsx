import React from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockRichText } from './BlockRichText';

export const BlockRichTextExample = (
	<BlockRichText
		content={`
  # Title


  ${loremIpsum({ count: 20 })}


  * one
  * two
  * three


  <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
  </ul>
  `}
	/>
);

describe('<BlockRichText />', () => {
	it('Should be able to render', () => {
		shallow(BlockRichTextExample);
	});

	it('Should render the markdown correctly', () => {
		const component = mount(BlockRichTextExample);

		const html = component.html();
		expect(html).toContain('<h1 id="title">Title</h1>');
		expect(html).toContain('<p>');
		expect(html).toContain('<ul>');
		expect(html).toContain('<li>one</li>');
		expect(html).toContain('<li>two</li>');
		expect(html).toContain('<li>three</li>');
		expect(html).toContain('<li>1</li>');
		expect(html).toContain('<li>2</li>');
		expect(html).toContain('<li>3</li>');
	});

	it('Should set the correct className', () => {
		const component = shallow(BlockRichTextExample);

		// const container = component.find('.o-container');
		// const contentContainer = container.find('div').last();

		expect(component.hasClass('o-container-vertical')).toEqual(true);
		// expect(component.hasClass('o-container-vertical-rich-text')).toEqual(true);

		// expect(container.hasClass('o-container--small')).toEqual(true);

		// expect(contentContainer.hasClass('c-content')).toEqual(true);
	});
});
