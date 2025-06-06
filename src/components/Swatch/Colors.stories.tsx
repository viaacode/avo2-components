import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { type ColorCategory, COLORS } from '../../colors';

import { SwatchBlock } from './SwatchBlock';

const transformColors = (colors: ColorCategory) => {
	return Object.entries(colors).map(([name, value]) => ({
		name,
		value,
	}));
};

const stories = [
	['Grayscale', transformColors(COLORS.GRAYSCALE)],
	['Primary', transformColors(COLORS.PRIMARY)],
	['Secondary', transformColors(COLORS.SECONDARY)],
	['Tertiary', transformColors(COLORS.TERTIARY)],
];

const story = storiesOf('components/Colors', module);

stories.forEach(([title, colors]: any) => story.add(title, () => <SwatchBlock colors={colors} />));

story.add('All colors', () => (
	<Fragment>
		{stories.map(([title, colors]: any) => (
			<SwatchBlock
				key={colors.map((color: { name: string; value: string }) => color.value).join('-')}
				title={title}
				colors={colors}
			/>
		))}
	</Fragment>
));
