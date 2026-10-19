import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { PanelBody } from './PanelBody';

describe('<PanelBody />', () => {
	it('Should be able to render', () => {
		render(
			<PanelBody>
				<Fragment />
			</PanelBody>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-panel__body-custom';

		const { container } = render(
			<PanelBody className={customClass}>
				<Fragment />
			</PanelBody>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-panel__body');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<PanelBody>
				<p id="panel-body-test">Testing 123</p>
			</PanelBody>
		);

		const paragraph = screen.getByText('Testing 123');

		expect(paragraph).toHaveAttribute('id', 'panel-body-test');
		expect(container.firstChild).toContainElement(paragraph);
	});
});
