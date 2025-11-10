import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { COLORS, type ColorCategory } from '../../colors/index.js';
import { SwatchBlock } from './SwatchBlock.js';

const transformColors = (colors: ColorCategory) =>
	Object.entries(colors).map(([name, value]) => ({ name, value }));

const grayscale = transformColors(COLORS.GRAYSCALE);
const primary = transformColors(COLORS.PRIMARY);
const secondary = transformColors(COLORS.SECONDARY);
const tertiary = transformColors(COLORS.TERTIARY);

const meta: Meta<typeof SwatchBlock> = {
	title: 'components/Colors',
	component: SwatchBlock,
};
export default meta;

type Story = StoryObj<typeof SwatchBlock>;

export const Grayscale: Story = {
	render: () => <SwatchBlock colors={grayscale} />,
};

export const Primary: Story = {
	render: () => <SwatchBlock colors={primary} />,
};

export const Secondary: Story = {
	render: () => <SwatchBlock colors={secondary} />,
};

export const Tertiary: Story = {
	render: () => <SwatchBlock colors={tertiary} />,
};

export const AllColors: Story = {
	render: () => (
		<Fragment>
			{[
				['Grayscale', grayscale],
				['Primary', primary],
				['Secondary', secondary],
				['Tertiary', tertiary],
			].map(([title, colors]) => (
				<SwatchBlock
					key={(colors as { name: string; value: string }[]).map((c) => c.value).join('-')}
					title={title as string}
					colors={colors as { name: string; value: string }[]}
				/>
			))}
		</Fragment>
	),
};
