import React from 'react';

import { storiesOf } from '@storybook/react';
import { BlockIframe } from './BlockIframe';

storiesOf('BlockIframe', module)
	.addParameters({ jest: ['BlockIframe'] })
	.add('BlockIframe', () => (
		<BlockIframe
			title="Video about VIAA"
			src="https://player.vimeo.com/video/152135660?color=ffffff&title=0&byline=0&portrait=0"
			width={800}
			height={450}
		/>
	));
