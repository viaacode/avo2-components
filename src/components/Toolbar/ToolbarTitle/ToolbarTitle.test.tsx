import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { ToolbarTitle } from './ToolbarTitle';

describe('<ToolbarTitle />', () => {
	it('Should be able to render', () => {
		render(
			<ToolbarTitle>
				<Fragment />
			</ToolbarTitle>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-toolbar__title-custom';

		const { container } = render(
			<ToolbarTitle className={customClass}>
				<Fragment />
			</ToolbarTitle>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-toolbar__title');
	});

	it('Should correctly pass children', () => {
		render(
			<ToolbarTitle>
				<p id="toolbar-title-test">Testing 123</p>
			</ToolbarTitle>
		);

		const paragraph = screen.getByText('Testing 123');

		expect(paragraph).toHaveAttribute('id', 'toolbar-title-test');
		expect(screen.getByRole('heading', { level: 2 })).toContainElement(paragraph);
	});
});
