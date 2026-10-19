import { render } from '@testing-library/react';

import type { IconNameSchema } from '../../Icon/Icon.types';

import { Tab } from './Tab';

const mockTab = {
	className: 'c-tabs__item-custom',
	label: 'Videos',
	id: 'video',
	active: true,
};

const mockTabWithIcon = {
	...mockTab,
	icon: 'video' as IconNameSchema,
};

describe('<Tab />', () => {
	it('Should be able to render', () => {
		render(<Tab {...mockTab} />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<Tab {...mockTab} />);

		expect(container.firstChild).toHaveClass(mockTab.className);
		expect(container.firstChild).toHaveClass('c-tab-item');
	});

	it('Should set the correct className when icon is passed', () => {
		const { container } = render(<Tab {...mockTabWithIcon} />);

		expect(container.querySelectorAll('.o-svg-icon')).toHaveLength(1);
		expect(container.querySelector(`.o-svg-icon--${mockTabWithIcon.icon}`)).toBeInTheDocument();
	});

	it('Should set the correct className when passing `active`', () => {
		const { container } = render(<Tab {...mockTab} />);

		expect(container.firstChild).toHaveClass('c-tab-item__active');
	});

	it('Should render `label` correctly', () => {
		const { container } = render(<Tab {...mockTab} />);

		const labelElements = container.querySelectorAll('span');

		expect(labelElements).toHaveLength(1);

		expect(labelElements[0]).toHaveTextContent(mockTab.label);
	});
});
