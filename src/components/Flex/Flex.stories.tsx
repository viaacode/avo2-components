import { loremIpsum } from 'lorem-ipsum';
import { Fragment } from 'react';

import { Flex } from './Flex';
import { FlexItem } from './FlexItem/FlexItem';

const content1 = loremIpsum({ count: 1 });
const content2 = loremIpsum({ count: 4 });
const content3 = loremIpsum({ count: 2 });

const dummyFlexItems = (
	<Fragment>
		<FlexItem>{content1}</FlexItem>
		<FlexItem>{content2}</FlexItem>
		<FlexItem>{content3}</FlexItem>
	</Fragment>
);

export default {
	title: 'components/Flex',

	parameters: {
		jest: ['Flex'],
	},
};

export const _Flex = () => <Flex>{dummyFlexItems}</Flex>;
export const FlexHorizontal = () => <Flex orientation="horizontal">{dummyFlexItems}</Flex>;

FlexHorizontal.story = {
	name: 'Flex (horizontal)',
};

export const FlexVertical = () => <Flex orientation="vertical">{dummyFlexItems}</Flex>;

FlexVertical.story = {
	name: 'Flex (vertical)',
};

export const FlexCenter = () => <Flex center>{dummyFlexItems}</Flex>;

FlexCenter.story = {
	name: 'Flex (center)',
};

export const FlexVerticalCenter = () => (
	<Flex orientation="vertical" center>
		{dummyFlexItems}
	</Flex>
);

FlexVerticalCenter.story = {
	name: 'Flex (vertical - center)',
};

export const FlexHorizontalCenter = () => (
	<Flex orientation="horizontal" center>
		{dummyFlexItems}
	</Flex>
);

FlexHorizontalCenter.story = {
	name: 'Flex (horizontal - center)',
};

export const FlexJustify = () => <Flex justify="between">{dummyFlexItems}</Flex>;

FlexJustify.story = {
	name: 'Flex (justify)',
};

export const FlexWrapped = () => <Flex wrap>{dummyFlexItems}</Flex>;

FlexWrapped.story = {
	name: 'Flex (wrapped)',
};

export const FlexSpacedRegular = () => <Flex spaced="regular">{dummyFlexItems}</Flex>;

FlexSpacedRegular.story = {
	name: 'Flex (spaced - regular)',
};

export const FlexSpacedWide = () => <Flex spaced="wide">{dummyFlexItems}</Flex>;

FlexSpacedWide.story = {
	name: 'Flex (spaced - wide)',
};
