import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { Panel } from './Panel';
import { PanelBody, PanelHeader } from './Panel.slots';

describe('<Panel />', () => {
	it('Should be able to render', () => {
		render(
			<Panel>
				<PanelHeader>
					<Fragment>Header</Fragment>
				</PanelHeader>
				<PanelBody>
					<Fragment>Body</Fragment>
				</PanelBody>
			</Panel>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-panel-custom';

		const { container } = render(
			<Panel className={customClass}>
				<PanelHeader>
					<Fragment>Header</Fragment>
				</PanelHeader>
				<PanelBody>
					<Fragment>Body</Fragment>
				</PanelBody>
			</Panel>
		);

		expect(container.querySelectorAll('.c-panel')).toHaveLength(1);
		expect(container.firstChild).toHaveClass('c-panel');
		expect(container.firstChild).toHaveClass(customClass);
		expect(container.querySelectorAll('.c-panel__header')).toHaveLength(1);
		expect(container.querySelectorAll('.c-panel__body')).toHaveLength(1);
	});

	it('Should correctly render the panel header', () => {
		const { container } = render(
			<Panel>
				<PanelHeader>
					<p id="test">Hello!</p>
				</PanelHeader>
			</Panel>
		);

		const headerElement = container.querySelector('.c-panel__header');

		expect(headerElement).toContainElement(screen.getByText('Hello!'));
		expect(container.querySelectorAll('.c-panel__header')).toHaveLength(1);
		expect(container.querySelectorAll('.c-panel__body')).toHaveLength(0);
	});

	it('Should correctly render the panel body', () => {
		const { container } = render(
			<Panel>
				<PanelBody>
					<p id="test">Hello!</p>
				</PanelBody>
			</Panel>
		);

		const bodyElement = container.querySelector('.c-panel__body');

		expect(bodyElement).toContainElement(screen.getByText('Hello!'));
		expect(container.querySelectorAll('.c-panel__header')).toHaveLength(0);
		expect(container.querySelectorAll('.c-panel__body')).toHaveLength(1);
	});
});
