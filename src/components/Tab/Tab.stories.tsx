import React from 'react';

import { storiesOf } from '@storybook/react';

import { Tab } from './Tab';

const mockTab = {
	id: 'videosTestId',
	label: 'Videos',
	href: '#',
	active: true,
};

const mockTabWithIcon = {
	...mockTab,
	icon: 'video',
};

storiesOf('Tab', module)
	.addParameters({ jest: ['Tab'] })
	.add('Tab', () => <Tab {...mockTab} />)
	.add('Tab with Icon', () => <Tab {...mockTabWithIcon} />);
