import React from 'react';

import { storiesOf } from '@storybook/react';

import { loremIpsum } from 'lorem-ipsum';
import { ExpandableContainer } from './ExpandableContainer';

storiesOf('ExpandableContainer', module)
	.addParameters({ jest: ['ExpandableContainer'] })
	.add('ExpandableContainer', () => (
		<ExpandableContainer>
			<p>{loremIpsum({ count: 20 })}</p>
		</ExpandableContainer>
	))
	.add('ExpandableContainer options', () => (
		<ExpandableContainer
			collapsedHeight={200}
			defaultExpanded={true}
			expandLabel="more"
			collapseLabel="less"
		>
			<p>{loremIpsum({ count: 20 })}</p>
		</ExpandableContainer>
	));
