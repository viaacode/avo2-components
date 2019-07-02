import React from 'react';

import { storiesOf } from '@storybook/react';
import { BlockImage } from './BlockImage';

const imageSource = '/images/500x200.svg';

storiesOf('BlockImage', module)
	.addParameters({ jest: ['BlockImage'] })
	.add('BlockImage', () => (
		<BlockImage
			imageSource={imageSource}
			imageDescription="image showing the default dimensions on a grey background"
		/>
	));
