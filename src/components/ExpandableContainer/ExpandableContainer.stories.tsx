import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import { ExpandableContainer } from './ExpandableContainer.js';

storiesOf('components/ExpandableContainer', module)
	.addParameters({ jest: ['ExpandableContainer'] })
	.add('ExpandableContainer', () => (
		<ExpandableContainer>
			<p>{loremIpsum({ count: 20 })}</p>
		</ExpandableContainer>
	))
	.add('ExpandableContainer options', () => (
		<ExpandableContainer
			collapsedHeight={200}
			defaultExpanded
			expandLabel="more"
			collapseLabel="less"
		>
			<p>{loremIpsum({ count: 20 })}</p>
		</ExpandableContainer>
	));
