import { render } from '@testing-library/react';

import { Toolbar } from './Toolbar';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';
import { ToolbarItem } from './ToolbarItem/ToolbarItem';

describe('<Toolbar />', () => {
	it('Should be able to render', () => {
		render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
				<ToolbarCenter>
					<ToolbarItem>Center</ToolbarItem>
				</ToolbarCenter>
				<ToolbarRight>
					<ToolbarItem>Right</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-toolbar-custom';

		const { container: toolbarContainer } = render(
			<Toolbar className={customClass}>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
				<ToolbarCenter>
					<ToolbarItem>Center</ToolbarItem>
				</ToolbarCenter>
				<ToolbarRight>
					<ToolbarItem>Right</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
		);

		const mainToolbarDiv = toolbarContainer.querySelectorAll('.c-toolbar');
		const leftControlsDiv = toolbarContainer.querySelectorAll('.c-toolbar__left');
		const centerControlsDiv = toolbarContainer.querySelectorAll('.c-toolbar__center');
		const rightControlsDiv = toolbarContainer.querySelectorAll('.c-toolbar__right');

		expect(mainToolbarDiv).toHaveLength(1);
		expect(mainToolbarDiv[0]).toHaveClass(customClass);
		expect(leftControlsDiv).toHaveLength(1);
		expect(centerControlsDiv).toHaveLength(1);
		expect(rightControlsDiv).toHaveLength(1);
	});

	it('Should set the correct className for size', () => {
		const { container: regularToolbarContainer } = render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const { container: mediumToolbarContainer } = render(
			<Toolbar size="medium">
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarContainer.firstChild;
		const mediumToolbarInnerElement = mediumToolbarContainer.firstChild;

		expect(regularToolbarInnerElement).not.toHaveClass('c-toolbar--medium');
		expect(mediumToolbarInnerElement).toHaveClass('c-toolbar--medium');
	});

	it('Should set the correct className for spaced', () => {
		const { container: regularToolbarContainer } = render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const { container: spacedToolbarContainer } = render(
			<Toolbar spaced>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarContainer.firstChild;
		const spacedToolbarInnerElement = spacedToolbarContainer.firstChild;

		expect(regularToolbarInnerElement).not.toHaveClass('c-toolbar--spaced');
		expect(spacedToolbarInnerElement).toHaveClass('c-toolbar--spaced');
	});

	it('Should set the correct className for justify', () => {
		const { container: regularToolbarContainer } = render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const { container: justifiedToolbarContainer } = render(
			<Toolbar justify>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarContainer.firstChild;
		const justifiedToolbarInnerElement = justifiedToolbarContainer.firstChild;

		expect(regularToolbarInnerElement).not.toHaveClass('c-toolbar--justified');
		expect(justifiedToolbarInnerElement).toHaveClass('c-toolbar--justified');
	});

	it('Should set the correct className for autoHeight', () => {
		const { container: regularToolbarContainer } = render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const { container: autoHeightToolbarContainer } = render(
			<Toolbar autoHeight>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarContainer.firstChild;
		const autoHeightToolbarInnerElement = autoHeightToolbarContainer.firstChild;

		expect(regularToolbarInnerElement).not.toHaveClass('c-toolbar--auto');
		expect(autoHeightToolbarInnerElement).toHaveClass('c-toolbar--auto');
	});

	it('Should set the correct className for alignTop', () => {
		const { container: regularToolbarContainer } = render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const { container: alignTopToolbarContainer } = render(
			<Toolbar alignTop>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarContainer.firstChild;
		const alignTopToolbarInnerElement = alignTopToolbarContainer.firstChild;

		expect(regularToolbarInnerElement).not.toHaveClass('c-toolbar--align-top');
		expect(alignTopToolbarInnerElement).toHaveClass('c-toolbar--align-top');
	});

	it('Should correctly render the left controls', () => {
		const { container: toolbarContainer } = render(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>
						<p id="test">Hello!</p>
					</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const children = toolbarContainer.querySelector('#test');

		expect(toolbarContainer.querySelector('.c-toolbar__left')).toContainElement(
			children as HTMLElement
		);

		const leftElement = toolbarContainer.querySelectorAll('.c-toolbar__left');
		const centerElement = toolbarContainer.querySelectorAll('.c-toolbar__center');
		const rightElement = toolbarContainer.querySelectorAll('.c-toolbar__right');

		expect(leftElement).toHaveLength(1);
		expect(centerElement).toHaveLength(0);
		expect(rightElement).toHaveLength(0);
	});

	it('Should correctly render the center controls', () => {
		const { container: toolbarContainer } = render(
			<Toolbar>
				<ToolbarCenter>
					<ToolbarItem>
						<p id="test">Hello!</p>
					</ToolbarItem>
				</ToolbarCenter>
			</Toolbar>
		);

		const children = toolbarContainer.querySelector('#test');

		expect(toolbarContainer.querySelector('.c-toolbar__center')).toContainElement(
			children as HTMLElement
		);

		const leftElement = toolbarContainer.querySelectorAll('.c-toolbar__left');
		const centerElement = toolbarContainer.querySelectorAll('.c-toolbar__center');
		const rightElement = toolbarContainer.querySelectorAll('.c-toolbar__right');

		expect(leftElement).toHaveLength(0);
		expect(centerElement).toHaveLength(1);
		expect(rightElement).toHaveLength(0);
	});

	it('Should correctly render the right controls', () => {
		const { container: toolbarContainer } = render(
			<Toolbar>
				<ToolbarRight>
					<ToolbarItem>
						<p id="test">Hello!</p>
					</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
		);

		const children = toolbarContainer.querySelector('#test');

		expect(toolbarContainer.querySelector('.c-toolbar__right')).toContainElement(
			children as HTMLElement
		);

		const leftElement = toolbarContainer.querySelectorAll('.c-toolbar__left');
		const centerElement = toolbarContainer.querySelectorAll('.c-toolbar__center');
		const rightElement = toolbarContainer.querySelectorAll('.c-toolbar__right');

		expect(leftElement).toHaveLength(0);
		expect(centerElement).toHaveLength(0);
		expect(rightElement).toHaveLength(1);
	});
});
