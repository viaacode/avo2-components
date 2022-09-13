import { storiesOf } from '@storybook/react';
import React from 'react';

import image1600x900 from '../../../static/images/1600x900.jpg';
import image400x300 from '../../../static/images/400x300.jpg';

import { Image } from './Image';

storiesOf('components/Image', module)
	.addParameters({ jest: ['Image'] })
	.add('Image', () => (
		<Image src={image400x300} alt="image showing the default dimensions on a grey background" />
	))
	.add('Image full width', () => (
		<Image
			wide
			src={image1600x900}
			alt="image showing the default dimensions on a grey background"
		/>
	));
