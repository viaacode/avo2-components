import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockImageGrid } from './BlockImageGrid';

const images = [
	'/images/200x200.svg?id=0',
	'/images/200x200.svg?id=1',
	'/images/200x200.svg?id=2',
	'/images/200x200.svg?id=3',
	'/images/200x200.svg?id=4',
	'/images/200x200.svg?id=5',
	'/images/200x200.svg?id=6',
	'/images/200x200.svg?id=7',
	'/images/200x200.svg?id=8',
	'/images/200x200.svg?id=9',
];

const images2 = [
	'/images/500x200.svg?id=0',
	'/images/500x200.svg?id=1',
	'/images/500x200.svg?id=2',
	'/images/500x200.svg?id=3',
	'/images/500x200.svg?id=4',
	'/images/500x200.svg?id=5',
	'/images/500x200.svg?id=6',
	'/images/500x200.svg?id=7',
	'/images/500x200.svg?id=8',
	'/images/500x200.svg?id=9',
];

storiesOf('blocks/BlockImageGrid', module)
	.addParameters({ jest: ['Image'] })
	.add('BlockImageGrid 200x200', () => <BlockImageGrid images={images} />)
	.add('BlockImageGrid 500x200', () => <BlockImageGrid images={images2} width={500} height={200} />)
	.add('BlockImageGrid 200x200 fill contain', () => (
		<BlockImageGrid images={images2} width={200} height={200} fill="contain" />
	))
	.add('BlockImageGrid 200x200 fill cover', () => (
		<BlockImageGrid images={images2} width={200} height={200} fill="cover" />
	));
