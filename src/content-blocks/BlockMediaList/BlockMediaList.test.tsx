import { mount, shallow } from 'enzyme';
import React from 'react';

import { BlockMediaList } from './BlockMediaList';
import { MEDIA_LIST_CTA_MOCK, MEDIA_LIST_MOCK } from './BlockMediaList.mock';

describe('<BlockMediaList />', () => {
	const customClass = 'c-custom-block';
	const BlockMediaListComponent = <BlockMediaList className={customClass} {...MEDIA_LIST_MOCK} />;

	it('Should be able to render', () => {
		shallow(BlockMediaListComponent);
	});

	it('Should pass a custom className', () => {
		const blockMediaList = shallow(BlockMediaListComponent);

		expect(blockMediaList.hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass on `elements` prop', () => {
		const blockMediaList = mount(BlockMediaListComponent);
		const mediaCardItems = blockMediaList.find('.c-media-card');
		const mediaCardTitle = mediaCardItems.at(3).find('.c-media-card__title');

		expect(mediaCardItems).toHaveLength(MEDIA_LIST_MOCK.elements.length);
		expect(mediaCardTitle.text()).toBe(MEDIA_LIST_MOCK.elements[3].title);
	});

	it('Should correctly render a CTA when given', () => {
		const blockMediaList = mount(
			<BlockMediaList
				elements={MEDIA_LIST_MOCK}
				navigate={() => {}}
				{...MEDIA_LIST_CTA_MOCK}
			/>
		);

		const ctaItem = blockMediaList.find('.c-cta-item');
		const ctaButtonLabel = ctaItem.find('.c-cta__content .c-button__label');

		expect(ctaItem).toHaveLength(1);
		expect(ctaButtonLabel.text()).toBe(MEDIA_LIST_CTA_MOCK.ctaButtonLabel);
	});
});
