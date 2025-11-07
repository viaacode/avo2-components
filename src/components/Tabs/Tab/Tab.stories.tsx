import { storiesOf } from '@storybook/react';

import type { IconNameSchema } from '../../Icon/Icon.types.js';

import { Tab } from './Tab.js';

const mockTab = {
	id: 'videosTestId',
	label: 'Videos',
	href: '#',
	active: true,
};

const mockTabWithIcon = {
	...mockTab,
	icon: 'video' as IconNameSchema,
};

storiesOf('components/Tab', module)
	.addParameters({ jest: ['Tab'] })
	.add('Tab', () => <Tab {...mockTab} />)
	.add('Tab with Icon', () => <Tab {...mockTabWithIcon} />);
