import { render } from '@testing-library/react';

import { Header } from './Header';
import { MOCK_HEADER_PROPS_FULL } from './Header.mock';

describe('<Header />', () => {
	it('Should be able to render', () => {
		render(<Header {...MOCK_HEADER_PROPS_FULL} />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-header-custom';
		const { container } = render(<Header className={customClass} {...MOCK_HEADER_PROPS_FULL} />);

		expect(container.firstChild).toHaveClass('c-header');
		expect(container.firstChild).toHaveClass(customClass);
	});
});
