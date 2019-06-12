import { shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { COLORS } from '../../colors';
import { Navbar } from './Navbar';

describe('<Navbar />', () => {
	it('Should be able to render', () => {
		shallow(
			<Navbar>
				<Fragment />
			</Navbar>
		);
	});

	it('Should set the correct classNames when position is passed', () => {
		const navbarDefaultComponent = shallow(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const navbarTopComponent = shallow(
			<Navbar position="top">
				<Fragment />
			</Navbar>
		);
		const navbarBottomComponent = shallow(
			<Navbar position="bottom">
				<Fragment />
			</Navbar>
		);

		expect(navbarDefaultComponent.hasClass('c-navbar--bordered-bottom')).toEqual(true);
		expect(navbarDefaultComponent.hasClass('c-navbar--bordered-top')).toEqual(false);

		expect(navbarTopComponent.hasClass('c-navbar--bordered-bottom')).toEqual(true);
		expect(navbarTopComponent.hasClass('c-navbar--bordered-top')).toEqual(false);

		expect(navbarBottomComponent.hasClass('c-navbar--bordered-top')).toEqual(true);
		expect(navbarBottomComponent.hasClass('c-navbar--bordered-bottom')).toEqual(false);
	});

	it('Should set the correct classNames when spacing is passed', () => {
		const navbarDefaultComponent = shallow(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const navbarRegularComponent = shallow(
			<Navbar spacing="regular">
				<Fragment />
			</Navbar>
		);
		const navbarDoubleComponent = shallow(
			<Navbar spacing="double">
				<Fragment />
			</Navbar>
		);

		expect(navbarDefaultComponent.hasClass('c-navbar--double-spaced')).toEqual(false);
		expect(navbarRegularComponent.hasClass('c-navbar--double-spaced')).toEqual(false);
		expect(navbarDoubleComponent.hasClass('c-navbar--double-spaced')).toEqual(true);
	});

	it('Should set the correct classNames when autoHeight is passed', () => {
		const navbarDefaultComponent = shallow(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const navbarAutoHeightTrueComponent = shallow(
			<Navbar autoHeight={true}>
				<Fragment />
			</Navbar>
		);
		const navbarAutoHeightFalseComponent = shallow(
			<Navbar autoHeight={false}>
				<Fragment />
			</Navbar>
		);

		expect(navbarDefaultComponent.hasClass('c-navbar--auto')).toEqual(false);
		expect(navbarAutoHeightTrueComponent.hasClass('c-navbar--auto')).toEqual(true);
		expect(navbarAutoHeightFalseComponent.hasClass('c-navbar--auto')).toEqual(false);
	});

	it('Should set the correct classNames when color is passed', () => {
		const navbarDefaultComponent = shallow(
			<Navbar>
				<Fragment />
			</Navbar>
		);
		const navbarAutoHeightFalseComponent = shallow(
			<Navbar color={COLORS.GRAYSCALE.G50}>
				<Fragment />
			</Navbar>
		);

		expect((navbarDefaultComponent.prop('style') || {}).backgroundColor).toEqual('');
		expect((navbarAutoHeightFalseComponent.prop('style') || {}).backgroundColor).toEqual(
			COLORS.GRAYSCALE.G50
		);
	});

	it('Should correctly pass children', () => {
		const navbarComponent = shallow(
			<Navbar>
				<p className="navbar-test" />
			</Navbar>
		);

		const paragraph = navbarComponent.find('.navbar-test');

		expect(navbarComponent.children().html()).toEqual(paragraph.html());
	});
});
