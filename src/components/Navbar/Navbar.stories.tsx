import { loremIpsum } from 'lorem-ipsum';
import { Fragment } from 'react';

import { Navbar } from './Navbar';

const content = 'navbar content';

export default {
	title: 'components/Navbar',

	parameters: {
		jest: ['Container'],
	},
};

export const _Navbar = () => (
	<Fragment>
		<Navbar>{content}</Navbar>
		<div style={{ height: '200px' }} />
		<Navbar placement="bottom">{content}</Navbar>
	</Fragment>
);

export const FixedNavbar = () => (
	<Fragment>
		<Navbar position="fixed" background={'alt'}>
			{content}
		</Navbar>
		{loremIpsum({ count: 300 })}
	</Fragment>
);

FixedNavbar.story = {
	name: 'Fixed navbar',
};

export const AutoHeightNavbar = () => (
	<Navbar autoHeight={true}>
		{content}
		<br />
		{content}
		<br />
		{content}
		<br />
		{content}
		<br />
		{content}
	</Navbar>
);

AutoHeightNavbar.story = {
	name: 'Auto height navbar',
};

export const NavbarBackgrounds = () => (
	<Fragment>
		<Navbar>{`${content} on a transparent background`}</Navbar>
		<br />
		<Navbar background="white">{`${content} on a 'white' background`}</Navbar>
		<br />
		<Navbar background="alt">{`${content} on an 'alt' background`}</Navbar>
		<br />
		<Navbar background="inverse">{`${content} on an 'inverse' background`}</Navbar>
	</Fragment>
);

NavbarBackgrounds.story = {
	name: 'Navbar backgrounds',
};
