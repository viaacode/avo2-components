import { storiesOf } from '@storybook/react';
import React from 'react';

import { FlexItem } from '../FlexItem/FlexItem.js';

storiesOf('components/FlexItem', module)
	.addParameters({ jest: ['FlexItem'] })
	.add('FlexItem', () => <FlexItem>Flex Item</FlexItem>)
	.add('FlexItem (shrink)', () => <FlexItem shrink>Flex Item</FlexItem>);
