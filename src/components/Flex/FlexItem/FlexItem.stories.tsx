import { FlexItem } from '../FlexItem/FlexItem.js';

export default {
	title: 'components/FlexItem',

	parameters: {
		jest: ['FlexItem'],
	},
};

export const _FlexItem = () => <FlexItem>Flex Item</FlexItem>;

_FlexItem.story = {
	name: 'FlexItem',
};

export const FlexItemShrink = () => <FlexItem shrink>Flex Item</FlexItem>;

FlexItemShrink.story = {
	name: 'FlexItem (shrink)',
};
