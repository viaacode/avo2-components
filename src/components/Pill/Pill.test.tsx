import { mount, shallow } from 'enzyme';

import { Pill } from './Pill';
import { MOCK_PILL, MOCK_PILL__ACTIVE } from './Pill.mock';

const CUSTOM_CLASS = 'c-pill--custom';

export const pillExample = <Pill className={CUSTOM_CLASS} {...MOCK_PILL} />;
export const pillVariantExample = <Pill {...MOCK_PILL__ACTIVE} />;

describe('<Pill />', () => {
	it('Should be able to render', () => {
		shallow(pillExample);
	});

	it('Should set the correct className', () => {
		const component = mount(pillExample);

		const pillDivElement = component.find('.c-pill');

		expect(pillDivElement).toHaveLength(1);
	});

	it('Should set the correct className for variants', () => {
		const component = mount(pillExample);

		(MOCK_PILL__ACTIVE.variants || []).forEach((variant) => {
			const pillDivElement = component.find(`.c-pill--${variant}`);

			expect(pillDivElement).toHaveLength(1);
		});
	});
});
