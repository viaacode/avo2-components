import React from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockText } from './BlockText';

const customClass = 'c-block-custom';
const markdownAndHtmlString = `
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
  `;

const BlockTextExample = <BlockText className={customClass} text={markdownAndHtmlString} />;

describe('<BlockText />', () => {
	it('Should be able to render', () => {
		shallow(BlockTextExample);
	});

	it('Should render the markdown correctly', () => {
		const component = mount(BlockTextExample);

		const html = component.html();
		expect(html).toContain('>Title</h1>');
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
		const component = mount(BlockTextExample);

		const verticalContainer = component.find('div').at(0);
		const horizontalContainer = component.find('div').at(1);
		const contentContainer = component.find('div').at(2);

		expect(component.hasClass(customClass)).toEqual(true);

		expect(verticalContainer.hasClass('o-container-vertical')).toEqual(true);
		expect(verticalContainer.hasClass('o-container-vertical-rich-text')).toEqual(true);

		expect(horizontalContainer.hasClass('o-container')).toEqual(true);
		expect(horizontalContainer.hasClass('o-container--small')).toEqual(true);

		expect(contentContainer.hasClass('c-content')).toEqual(true);
	});
});
