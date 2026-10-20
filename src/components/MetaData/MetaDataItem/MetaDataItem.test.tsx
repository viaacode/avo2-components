import { render } from '@testing-library/react';

import { IconNameSchema } from '../../Icon/Icon.types';

import { MetaDataItem } from './MetaDataItem';

describe('<MetaDataItem />', () => {
	it('Should be able to render', () => {
		render(<MetaDataItem label="VRT" />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-meta-data__item-custom';

		const { container } = render(<MetaDataItem className={customClass} label="VRT" />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-meta-data__item');
	});

	it('Should set the correct className when icon is passed', () => {
		const { container } = render(<MetaDataItem icon={IconNameSchema.headphone} label="768" />);

		expect(container.firstChild).toHaveClass('c-meta-data-item--icon');
	});
});
