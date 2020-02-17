import React from 'react';

import { storiesOf } from '@storybook/react';
import { BlockImage } from './BlockImage';

const imageSource = '/images/500x200.svg';

storiesOf('blocks/BlockImage', module)
	.addParameters({ jest: ['BlockImage'] })
	.add('BlockImage', () => (
		<BlockImage
			imageSource={imageSource}
			imageDescription="image showing the default dimensions on a grey background"
		/>
	))
	.add('BlockImage 500px', () => (
		<BlockImage
			imageSource={imageSource}
			imageDescription="image showing the default dimensions on a grey background"
			width="500px"
		/>
	))
	.add('BlockImage 400px', () => (
		<BlockImage
			imageSource={imageSource}
			imageDescription="image showing the default dimensions on a grey background"
			width="400px"
		/>
	))
	.add('BlockImage title and text', () => (
		<BlockImage
			imageSource={imageSource}
			imageDescription="image showing the default dimensions on a grey background"
			title="A big image showing its dimensions on a grey background"
			text="The author of the image"
		/>
	))
	.add('BlockImage dark container', () => (
		<div className=" u-color-white" style={{ backgroundColor: '#2B414F', padding: '20px' }}>
			<BlockImage
				imageSource={imageSource}
				imageDescription="image showing the default dimensions on a grey background"
				title="A big image showing its dimensions on a grey background"
				text="The author of the image"
			/>
		</div>
	));
