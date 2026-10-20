import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { ToolbarItem } from './ToolbarItem';

describe('<ToolbarItem />', () => {
	it('Should be able to render', () => {
		render(
			<ToolbarItem>
				<Fragment />
			</ToolbarItem>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-toolbar__item-custom';

		const { container } = render(
			<ToolbarItem className={customClass}>
				<Fragment />
			</ToolbarItem>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-toolbar__item');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<ToolbarItem>
				<p id="toolbar-item-test">Testing 123</p>
			</ToolbarItem>
		);

		expect(container.firstChild).toContainElement(screen.getByText('Testing 123'));
	});
});
