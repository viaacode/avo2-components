import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockIFrame } from './BlockIFrame';

storiesOf('BlockIFrame', module)
	.addParameters({ jest: ['BlockIFrame'] })
	.add('BlockIFrame', () => (
		<BlockIFrame
			title="Video about VIAA"
			src="https://player.vimeo.com/video/152135660?color=ffffff&title=0&byline=0&portrait=0"
			width={800}
			height={450}
		/>
	));
