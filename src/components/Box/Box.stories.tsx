import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { Box } from './Box.js';

const content = loremIpsum({ count: 10 });

storiesOf('components/Box', module)
	.addParameters({ jest: ['Box'] })
	.add('Box', () => <Box>{content}</Box>)
	.add('Condensed Box', () => <Box condensed>{content}</Box>)
	.add('Box with Background', () => <Box backgroundColor="white">{content}</Box>);
