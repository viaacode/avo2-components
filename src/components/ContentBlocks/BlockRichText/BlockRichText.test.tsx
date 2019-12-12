import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockRichText } from './BlockRichText';
import { RICH_TEXT_MOCK } from './BlockRichText.mock';

const customClass = 'c-block-custom';

const SingleColumnExample = <BlockRichText className={customClass} content={RICH_TEXT_MOCK} />;
const TwoColumnExample = (
	<BlockRichText className={customClass} content={[RICH_TEXT_MOCK, RICH_TEXT_MOCK]} />
);

describe('<BlockRichText />', () => {
	it('Should be able to render', () => {
		shallow(SingleColumnExample);
	});

	it('Should render the markdown correctly', () => {
		const component = mount(SingleColumnExample);

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
		const component = mount(SingleColumnExample);

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

	it('Should create multiple columns', () => {
		const component = mount(TwoColumnExample);

		const horizontalContainer = component.find('div').at(1);

		expect(horizontalContainer.find('.c-content')).toHaveLength(2);
	});
});
