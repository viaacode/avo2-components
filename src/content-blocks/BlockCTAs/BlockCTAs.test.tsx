import { mount, shallow } from 'enzyme';
import React from 'react';
import { action } from '../../helpers';

import { BlockCTAs } from './BlockCTAs';
import { CTAS_MOCK } from './BlockCTAs.mock';

const navigate = action('navigate to');

describe('<BlockCTAs />', () => {
	it('Should be able to render', () => {
		shallow(<BlockCTAs elements={CTAS_MOCK} navigate={navigate} />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-cta-custom';
		const CTAsComponent = (
			<BlockCTAs className={customClass} elements={CTAS_MOCK} navigate={navigate} />
		);

		expect(shallow(CTAsComponent).hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass on elements prop', () => {
		const CTAsComponent = mount(<BlockCTAs elements={CTAS_MOCK} navigate={navigate} />);

		expect(CTAsComponent.prop('elements')).toEqual(CTAS_MOCK);
	});

	it('Should correctly render CTAs', () => {
		const CTAsComponent = mount(<BlockCTAs elements={CTAS_MOCK} navigate={navigate} />);
		const CTAsBlock = CTAsComponent.find('.c-cta');
		const CTAs = CTAsBlock.find('.c-cta-item');

		expect(CTAs).toHaveLength(2);
	});
});
