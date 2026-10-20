import { render } from '@testing-library/react';

import { CTA } from './CTA';
import { CTA_MOCK } from './CTA.mock';

describe('<CTA />', () => {
	it('Should be able to render', () => {
		render(<CTA {...CTA_MOCK} />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<CTA {...CTA_MOCK} />);

		expect(container.firstChild).toHaveClass('c-cta-item');
	});
});
