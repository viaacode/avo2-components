import { render } from '@testing-library/react';

import { StickyEdgeBar } from './StickyEdgeBar';

describe('<StickyEdgeBar />', () => {
	it('Should be able to render', () => {
		render(<StickyEdgeBar />);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-sticky-edge-bar-custom';

		const { container } = render(<StickyEdgeBar className={customClass} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-sticky-edge-bar');
	});
});
