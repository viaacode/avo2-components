import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { TabsItem } from '../TabsItem/TabsItem';

const mockTab = {
	label: 'Videos',
	href: '#',
	active: true,
};

const mockTabWithIcon = {
	label: 'Videos',
	href: '#',
	active: true,
	icon: 'video',
};

storiesOf('TabsItem', module)
	.addParameters({ jest: ['TabsItem'] })
	.add('TabsItem', () => <TabsItem tab={mockTab} />)
	.add('TabsItem with Icon', () => <TabsItem tab={mockTabWithIcon} />);
