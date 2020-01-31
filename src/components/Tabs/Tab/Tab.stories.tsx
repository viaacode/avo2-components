import { storiesOf } from '@storybook/react';
import React from 'react';

import { IconName } from '../../../types';

import { Tab } from './Tab';

const mockTab = {
	id: 'videosTestId',
	label: 'Videos',
	href: '#',
	active: true,
};

const mockTabWithIcon = {
	...mockTab,
	icon: 'video' as IconName,
};

storiesOf('Tab', module)
	.addParameters({ jest: ['Tab'] })
	.add('Tab', () => <Tab {...mockTab} />)
	.add('Tab with Icon', () => <Tab {...mockTabWithIcon} />);
