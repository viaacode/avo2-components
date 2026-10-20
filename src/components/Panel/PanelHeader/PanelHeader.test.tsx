import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { PanelHeader } from './PanelHeader';

describe('<PanelHeader />', () => {
	it('Should be able to render', () => {
		render(
			<PanelHeader>
				<Fragment />
			</PanelHeader>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-panel__header-custom';

		const { container } = render(
			<PanelHeader className={customClass}>
				<Fragment />
			</PanelHeader>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-panel__header');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<PanelHeader>
				<p id="panel-header-test">Testing 123</p>
			</PanelHeader>
		);

		expect(container.firstChild).toContainElement(screen.getByText('Testing 123'));
	});
});
