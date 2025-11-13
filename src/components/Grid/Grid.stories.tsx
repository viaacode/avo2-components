import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { Column } from './Column/Column';
import { Grid } from './Grid';

const GridDecorator = (story: () => ReactNode) => (
	<div className="br-styleguide">
		<div id="component-01-o-grid">{story()}</div>
	</div>
);

const meta: Meta = {
	title: 'components/Grid',
	component: Grid,
	decorators: [GridDecorator],
	parameters: {
		jest: ['Grid', 'Column'],
	},
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
	render: () => (
		<Grid>
			<Column size="12">12</Column>

			<Column size="11">11</Column>
			<Column size="1">1</Column>

			<Column size="10">10</Column>
			<Column size="2">2</Column>

			<Column size="9">9</Column>
			<Column size="3">3</Column>

			<Column size="8">8</Column>
			<Column size="4">4</Column>

			<Column size="7">7</Column>
			<Column size="5">5</Column>

			<Column size="6">6</Column>
			<Column size="6">6</Column>

			<Column size="4">4</Column>
			<Column size="4">4</Column>
			<Column size="4">4</Column>

			<Column size="3">3</Column>
			<Column size="3">3</Column>
			<Column size="3">3</Column>
			<Column size="3">3</Column>

			<Column size="2">2</Column>
			<Column size="2">2</Column>
			<Column size="2">2</Column>
			<Column size="2">2</Column>
			<Column size="2">2</Column>
			<Column size="2">2</Column>

			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>
			<Column size="1">1</Column>

			<Column size="static">This column will adapt to its content</Column>
			<Column size="flex">This column will fill the remaining space</Column>
		</Grid>
	),
};
