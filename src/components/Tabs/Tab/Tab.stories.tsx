import type { Meta, StoryObj } from '@storybook/react';

import type { IconNameSchema } from '../../Icon/Icon.types';
import { Tab } from './Tab';

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

const meta: Meta<typeof Tab> = {
	title: 'components/Tab',
	component: Tab,
	parameters: { jest: ['Tab'] },
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const TabStory: Story = { render: () => <Tab {...mockTab} /> };
export const TabWithIcon: Story = { render: () => <Tab {...mockTabWithIcon} /> };
