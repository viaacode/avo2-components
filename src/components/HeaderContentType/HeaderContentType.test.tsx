import { render } from '@testing-library/react';
import { AvoContentTypeEnglish } from '@viaa/avo2-types';

import { HeaderContentType } from './HeaderContentType';

describe('<HeaderContentType />', () => {
	it('Should be able to render', () => {
		render(<HeaderContentType category={AvoContentTypeEnglish.COLLECTION} label="collectie" />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-header-content-type-custom';
		const { container } = render(
			<HeaderContentType
				className={customClass}
				category={AvoContentTypeEnglish.COLLECTION}
				label="collectie"
			/>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-content-type');
		expect(container.firstChild).toHaveClass('c-content-type--collection');
	});
});
