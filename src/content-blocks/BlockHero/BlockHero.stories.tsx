import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import { BlockHero } from './BlockHero';
import { ButtonProps } from '../../components';
import { action } from '../../helpers';

const mockVideo =
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const mockPoster =
	'https://assets-qas.hetarchief.be/avo2/CONTENT_PAGE_IMAGE/Indianenkamp-6b09d280-8cb0-11ea-98b4-7592673e8244.jpg';
const mockButtons: ButtonProps[] = [
	{
		label: 'Inloggen',
		type: 'primary',
		onClick: action('login button clicked'),
	},
	{
		label: 'Account aanmaken',
		type: 'tertiary',
		onClick: action('create account clicked'),
	},
];

storiesOf('blocks/BlockHero', module)
	.addParameters({ jest: ['BlockHero'] })
	.add('BlockHero video with poster', () => (
		<div className="u-position-relative" style={{ backgroundColor: '#2b414f' }}>
			<BlockHero
				title="Page title"
				content={loremIpsum({ count: 3 })}
				src={mockVideo}
				poster={mockPoster}
				buttons={mockButtons}
			/>
		</div>
	))
	.add('BlockHero video without poster', () => (
		<div className="u-position-relative" style={{ backgroundColor: '#2b414f' }}>
			<BlockHero
				title="Page title"
				content={loremIpsum({ count: 3 })}
				src={mockVideo}
				buttons={mockButtons}
			/>
		</div>
	))
	.add('BlockHero img', () => (
		<div className="u-position-relative" style={{ backgroundColor: '#2b414f' }}>
			<BlockHero
				title="Page title"
				content={loremIpsum({ count: 3 })}
				poster={mockPoster}
				buttons={mockButtons}
			/>
		</div>
	))
	.add('BlockHero bg color', () => (
		<div className="u-position-relative" style={{ backgroundColor: 'red' }}>
			<BlockHero
				title="Page title"
				content={loremIpsum({ count: 3 })}
				poster={mockPoster}
				buttons={mockButtons}
			/>
		</div>
	))
	.add('BlockHero text color', () => (
		<div className="u-position-relative" style={{ backgroundColor: '#2b414f' }}>
			<BlockHero
				title="Page title"
				titleColor="red"
				content={loremIpsum({ count: 3 })}
				contentColor="red"
				poster={mockPoster}
				buttons={mockButtons}
			/>
		</div>
	));
