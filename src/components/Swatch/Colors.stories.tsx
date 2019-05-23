import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { ColorCategory, COLORS } from '../../colors';

import { SwatchBlock } from './SwatchBlock';

const transformColors = (colors: ColorCategory) => {
	return Object.entries(colors).map(([name, value]) => ({
		name,
		value,
	}));
};

storiesOf('Colors', module)
	.add('Grays', () => <SwatchBlock title="Grays" colors={transformColors(COLORS.GRAYS)} />)
	.add('Primary', () => <SwatchBlock title="Primary" colors={transformColors(COLORS.PRIMARY)} />)
	.add('Secondary', () => (
		<SwatchBlock title="Secondary" colors={transformColors(COLORS.SECONDARY)} />
	))
	.add('All colors', () => (
		<Fragment>
			<h1>All colors</h1>
			<SwatchBlock title="Grays" colors={transformColors(COLORS.GRAYS)} />
			<SwatchBlock title="Primary" colors={transformColors(COLORS.PRIMARY)} />
			<SwatchBlock title="Secondary" colors={transformColors(COLORS.SECONDARY)} />
		</Fragment>
	));
