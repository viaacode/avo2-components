import type { Meta, StoryFn } from '@storybook/react';
import { action } from 'storybook/actions';
import type { IconNameSchema } from '../Icon/Icon.types.js';
import { Pill, PillVariants } from '../Pill/Pill.js';
import { Tabs } from './Tabs.js';

const mockTabs = [
	{
		label: (
			<>
				Videos
				<Pill variants={[PillVariants.active]}>active</Pill>
			</>
		),
		id: 'video',
		active: true,
	},
	{
		label: (
			<>
				Audio
				<Pill>inactive</Pill>
			</>
		),
		id: 'audio',
	},
	{
		label: 'Collections',
		id: 'collection',
	},
	{
		label: 'Bundles',
		id: 'bundle',
	},
];

const mockTabsWithIcons = [
	{
		...mockTabs[0],
		icon: 'video' as IconNameSchema,
	},
	{
		...mockTabs[1],
		icon: 'headphone' as IconNameSchema,
	},
	{
		...mockTabs[2],
		icon: 'collection' as IconNameSchema,
	},
	{
		...mockTabs[3],
		icon: 'folder' as IconNameSchema,
	},
];

export default {
	title: 'components/Tabs',
	parameters: {
		jest: ['Tabs'],
	},
} as Meta;

const Template: StoryFn = (args) => (
	<>
		<div style={{ backgroundColor: '#FFF', padding: '5px' }}>
			<Tabs tabs={[]} {...args} />
		</div>
		<br />
		<div style={{ backgroundColor: '#EDEFF2', padding: '5px' }}>
			<Tabs tabs={[]} {...args} />
		</div>
		<br />
		<div style={{ backgroundColor: '#8AC1CE', padding: '5px' }}>
			<Tabs tabs={[]} {...args} dark />
		</div>
		<br />
		<div style={{ backgroundColor: '#3A586F', padding: '5px' }}>
			<Tabs tabs={[]} {...args} dark />
		</div>
		<br />
		<div style={{ backgroundColor: '#1D637A', padding: '5px' }}>
			<Tabs tabs={[]} {...args} dark />
		</div>
		<br />
		<div style={{ backgroundColor: '#25a4cf', padding: '5px' }}>
			<Tabs tabs={[]} {...args} dark />
		</div>
		<br />
		<div style={{ backgroundColor: '#00C8AA', padding: '5px' }}>
			<Tabs tabs={[]} {...args} dark />
		</div>
		<br />
		<div style={{ backgroundColor: '#f3aa2e', padding: '5px' }}>
			<Tabs tabs={[]} {...args} dark />
		</div>
	</>
);

export const Default = Template.bind({});
Default.args = {
	tabs: mockTabs,
	onClick: action('tab clicked'),
};

export const TabsWithBorder = Template.bind({});
TabsWithBorder.args = {
	tabs: mockTabs,
	border: true,
	onClick: action('tab clicked'),
};

export const TabsWithIcons = Template.bind({});
TabsWithIcons.args = {
	tabs: mockTabsWithIcons,
	onClick: action('tab clicked'),
};
