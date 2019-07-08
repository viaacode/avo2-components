import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockLinks } from './BlockLinks';

export const links = [
	{ label: 'Google', url: 'http://google.be' },
	{ label: 'Facebook', url: 'http://facebook.com' },
	{ label: 'Twitter', url: 'http://twitter.com' },
];

storiesOf('BlockLinks', module)
	.addParameters({ jest: ['BlockLinks'] })
	.add('BlockLinks', () => <BlockLinks uniqueKey="footerlinks" links={links} />);
