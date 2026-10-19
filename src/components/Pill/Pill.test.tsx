import { render } from '@testing-library/react';

import { Pill } from './Pill';
import { MOCK_PILL, MOCK_PILL__ACTIVE } from './Pill.mock';

const CUSTOM_CLASS = 'c-pill--custom';

export const pillExample = <Pill className={CUSTOM_CLASS} {...MOCK_PILL} />;
export const pillVariantExample = <Pill {...MOCK_PILL__ACTIVE} />;

describe('<Pill />', () => {
	it('Should be able to render', () => {
		render(pillExample);
	});

	it('Should set the correct className', () => {
		const { container } = render(pillExample);

		expect(container.querySelectorAll('.c-pill')).toHaveLength(1);
	});

	it('Should set the correct className for variants', () => {
		const { container } = render(pillVariantExample);

		(MOCK_PILL__ACTIVE.variants || []).forEach((variant) => {
			expect(container.querySelectorAll(`.c-pill--${variant}`)).toHaveLength(1);
		});
	});
});
