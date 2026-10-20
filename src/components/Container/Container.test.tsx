import { render } from '@testing-library/react';
import { Fragment } from 'react';

import { Container } from './Container';

describe('<Container />', () => {
	it('Should be able to render', () => {
		render(
			<Container>
				<Fragment />
			</Container>
		);
	});

	it('Should set the correct classnames when in horizontal mode', () => {
		const { container } = render(
			<Container mode="horizontal">
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass('o-container');
	});

	it('Should set the correct custom classnames', () => {
		const customClass = 'o-container-vertical-title';
		const { container } = render(
			<Container className={customClass}>
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass(customClass);
		// without a mode, no base container class is set
		expect(container.firstChild).not.toHaveClass('o-container');
		expect(container.firstChild).not.toHaveClass('o-container-vertical');
	});

	it('Should keep the base classname when passing a custom classname', () => {
		const customClass = 'o-container-vertical-title';
		const { container } = render(
			<Container className={customClass} mode="horizontal">
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-container');
	});

	it('Should set the correct classnames when passing `size` and no mode is passed', () => {
		const { container: smallContainer } = render(
			<Container size="small">
				<Fragment />
			</Container>
		);
		const { container: mediumContainer } = render(
			<Container size="medium">
				<Fragment />
			</Container>
		);
		const { container: largeContainer } = render(
			<Container size="large">
				<Fragment />
			</Container>
		);

		expect(smallContainer.firstChild).toHaveClass('o-container--small');
		expect(mediumContainer.firstChild).toHaveClass('o-container--medium');
		expect(largeContainer.firstChild).toHaveClass('o-container--large');
	});

	it('Should set the correct classnames when passing `size` in horizontal mode', () => {
		const { container: smallContainer } = render(
			<Container mode="horizontal" size="small">
				<Fragment />
			</Container>
		);
		const { container: mediumContainer } = render(
			<Container mode="horizontal" size="medium">
				<Fragment />
			</Container>
		);
		const { container: largeContainer } = render(
			<Container mode="horizontal" size="large">
				<Fragment />
			</Container>
		);

		expect(smallContainer.firstChild).toHaveClass('o-container--small');
		expect(mediumContainer.firstChild).toHaveClass('o-container--medium');
		expect(largeContainer.firstChild).toHaveClass('o-container--large');
	});

	it('Should set the correct classnames when in vertical mode', () => {
		const { container } = render(
			<Container mode="vertical">
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass('o-container-vertical');
	});

	it('Should set the correct classnames when passing `size` in vertical mode', () => {
		const { container: smallContainer } = render(
			<Container mode="vertical" size="small">
				<Fragment />
			</Container>
		);
		const { container: mediumContainer } = render(
			<Container mode="vertical" size="medium">
				<Fragment />
			</Container>
		);
		const { container: largeContainer } = render(
			<Container mode="vertical" size="large">
				<Fragment />
			</Container>
		);

		expect(smallContainer.firstChild).toHaveClass('o-container-vertical--small');
		expect(mediumContainer.firstChild).toHaveClass('o-container-vertical--medium');
		expect(largeContainer.firstChild).toHaveClass('o-container-vertical--large');
	});

	it('Should be able to have an `alt` background', () => {
		const { container } = render(
			<Container background="alt">
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass('o-container-vertical--bg-alt');
	});

	it('Should be able to have an `inverse` background', () => {
		const { container } = render(
			<Container background="inverse">
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass('o-container-vertical--bg-inverse');
	});

	it('Should be able to be rendered with a bottom border', () => {
		const { container } = render(
			<Container bordered>
				<Fragment />
			</Container>
		);

		expect(container.firstChild).toHaveClass('o-container-vertical--bottom-bordered');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Container>
				<p className="container-test" />
			</Container>
		);

		const paragraph = container.querySelector('.container-test');

		expect(paragraph).toBeInTheDocument();
		expect(container.firstChild?.firstChild).toBe(paragraph);
	});
});
