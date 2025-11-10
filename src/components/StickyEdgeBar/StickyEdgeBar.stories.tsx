import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';
import { StickyEdgeBar } from './StickyEdgeBar.js';

const pusherStyle: CSSProperties = {
	height: '768px',
	background: '#eee',
};

const meta: Meta<typeof StickyEdgeBar> = {
	title: 'components/StickyEdgeBar',
	component: StickyEdgeBar,
	parameters: { jest: ['StickyEdgeBar'] },
};
export default meta;

type Story = StoryObj<typeof StickyEdgeBar>;

export const Default: Story = {
	render: () => (
		<>
			<div style={pusherStyle}>Scroll down</div>
			<div>Above the bar</div>
			<StickyEdgeBar>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
			</StickyEdgeBar>
			<div>Below the bar</div>
			<div style={pusherStyle} />
		</>
	),
};
