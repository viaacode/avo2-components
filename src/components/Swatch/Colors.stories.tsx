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
	.add('Grayscale colors', () => <SwatchBlock colors={transformColors(COLORS.GRAYSCALE)} />)
	.add('Primary colors', () => <SwatchBlock colors={transformColors(COLORS.PRIMARY)} />)
	.add('Secondary colors', () => <SwatchBlock colors={transformColors(COLORS.SECONDARY)} />)
	.add('All colors', () => (
		<Fragment>
			<SwatchBlock title="Grayscale colors" colors={transformColors(COLORS.GRAYSCALE)} />
			<SwatchBlock title="Primary colors" colors={transformColors(COLORS.PRIMARY)} />
			<SwatchBlock title="Secondary colors" colors={transformColors(COLORS.SECONDARY)} />
		</Fragment>
	));
