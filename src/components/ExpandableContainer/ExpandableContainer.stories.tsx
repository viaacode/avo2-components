import { loremIpsum } from 'lorem-ipsum';

import { ExpandableContainer } from './ExpandableContainer';

export default {
	title: 'components/ExpandableContainer',

	parameters: {
		jest: ['ExpandableContainer'],
	},
};

export const _ExpandableContainer = () => (
	<ExpandableContainer>
		<p>{loremIpsum({ count: 20 })}</p>
	</ExpandableContainer>
);

_ExpandableContainer.story = {
	name: 'ExpandableContainer',
};

export const ExpandableContainerOptions = () => (
	<ExpandableContainer
		collapsedHeight={200}
		defaultExpanded
		expandLabel="more"
		collapseLabel="less"
	>
		<p>{loremIpsum({ count: 20 })}</p>
	</ExpandableContainer>
);

ExpandableContainerOptions.story = {
	name: 'ExpandableContainer options',
};
