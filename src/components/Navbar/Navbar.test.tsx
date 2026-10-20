import { render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { Navbar } from './Navbar';

describe('<Navbar />', () => {
	it('Should be able to render', () => {
		render(
			<Navbar>
				<Fragment />
			</Navbar>
		);
	});

	it('should correctly pass a custom className', () => {
		const customClass = 'c-navbar-custom';

		const { container } = render(
			<Navbar className={customClass}>
				<Fragment />
			</Navbar>
		);
		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-navbar');
	});

	it('Should set the correct classnames when placement is passed', () => {
		const { container: defaultContainer } = render(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const { container: topContainer } = render(
			<Navbar placement="top">
				<Fragment />
			</Navbar>
		);
		const { container: bottomContainer } = render(
			<Navbar placement="bottom">
				<Fragment />
			</Navbar>
		);

		expect(defaultContainer.firstChild).toHaveClass('c-navbar--bordered-bottom');
		expect(defaultContainer.firstChild).not.toHaveClass('c-navbar--bordered-top');

		expect(topContainer.firstChild).toHaveClass('c-navbar--bordered-bottom');
		expect(topContainer.firstChild).not.toHaveClass('c-navbar--bordered-top');

		expect(bottomContainer.firstChild).toHaveClass('c-navbar--bordered-top');
		expect(bottomContainer.firstChild).not.toHaveClass('c-navbar--bordered-bottom');
	});

	it('Should set the correct classnames when position is passed', () => {
		const { container: defaultContainer } = render(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const { container: fixedContainer } = render(
			<Navbar position="fixed">
				<Fragment />
			</Navbar>
		);

		expect(defaultContainer.firstChild).not.toHaveClass('c-navbar--fixed');
		expect(fixedContainer.firstChild).toHaveClass('c-navbar--fixed');
	});

	it('Should set the correct classnames when autoHeight is passed', () => {
		const { container: defaultContainer } = render(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const { container: autoHeightTrueContainer } = render(
			<Navbar autoHeight={true}>
				<Fragment />
			</Navbar>
		);
		const { container: autoHeightFalseContainer } = render(
			<Navbar autoHeight={false}>
				<Fragment />
			</Navbar>
		);

		expect(defaultContainer.firstChild).not.toHaveClass('c-navbar--auto');
		expect(autoHeightTrueContainer.firstChild).toHaveClass('c-navbar--auto');
		expect(autoHeightFalseContainer.firstChild).not.toHaveClass('c-navbar--auto');
	});

	it('Should set the correct classnames when background is passed', () => {
		const { container: defaultContainer } = render(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const { container: whiteContainer } = render(
			<Navbar background="white">
				<Fragment />
			</Navbar>
		);
		const { container: altContainer } = render(
			<Navbar background="alt">
				<Fragment />
			</Navbar>
		);
		const { container: inverseContainer } = render(
			<Navbar background="inverse">
				<Fragment />
			</Navbar>
		);

		expect(defaultContainer.firstChild).not.toHaveClass('c-navbar--white');
		expect(defaultContainer.firstChild).not.toHaveClass('c-navbar--bg-alt');
		expect(defaultContainer.firstChild).not.toHaveClass('c-navbar--inverse');

		expect(whiteContainer.firstChild).toHaveClass('c-navbar--white');
		expect(whiteContainer.firstChild).not.toHaveClass('c-navbar--bg-alt');
		expect(whiteContainer.firstChild).not.toHaveClass('c-navbar--inverse');

		expect(altContainer.firstChild).not.toHaveClass('c-navbar--white');
		expect(altContainer.firstChild).toHaveClass('c-navbar--bg-alt');
		expect(altContainer.firstChild).not.toHaveClass('c-navbar--inverse');

		expect(inverseContainer.firstChild).not.toHaveClass('c-navbar--white');
		expect(inverseContainer.firstChild).not.toHaveClass('c-navbar--bg-alt');
		expect(inverseContainer.firstChild).toHaveClass('c-navbar--inverse');
	});

	it('Should correctly pass children', () => {
		render(
			<Navbar>
				<p data-testid="navbar-test" className="navbar-test" />
			</Navbar>
		);

		const paragraph = screen.getByTestId('navbar-test');

		expect(paragraph.parentElement).toHaveClass('c-navbar');
		expect(paragraph.parentElement?.children).toHaveLength(1);
	});
});
