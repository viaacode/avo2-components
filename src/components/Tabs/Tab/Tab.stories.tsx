import { storiesOf } from '@storybook/react';
import React from 'react';

import { IconName } from '../../Icon/Icon.types';

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

storiesOf('components/Tab', module)
	.addParameters({ jest: ['Tab'] })
	.add('Tab', () => <Tab {...mockTab} />)
	.add('Tab with Icon', () => <Tab {...mockTabWithIcon} />);
