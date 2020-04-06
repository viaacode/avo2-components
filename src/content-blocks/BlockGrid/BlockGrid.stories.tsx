import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';
import { BlockGrid, GridItem } from './BlockGrid';
import { ButtonAction } from '../../types';

const elements: GridItem[] = [
	{ source: '/images/200x200.svg?id=0' },
	{ source: '/images/200x200.svg?id=1' },
	{ source: '/images/200x200.svg?id=2' },
	{ source: '/images/200x200.svg?id=3' },
	{ source: '/images/200x200.svg?id=4' },
	{ source: '/images/200x200.svg?id=5' },
	{ source: '/images/200x200.svg?id=6' },
	{ source: '/images/200x200.svg?id=7' },
	{ source: '/images/200x200.svg?id=8' },
	{ source: '/images/200x200.svg?id=9' },
];

const elements2: GridItem[] = [
	{
		source: '/images/500x200.svg?id=0',
		title: 'Vind inspiratie op jouw maat',
		text:
			'Zoek materiaal op jouw onderwijsniveau, domein, vak en methode of laat je inspireren door een voorselectie.',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=1',
		title: 'Bouw collecties, knip fragmenten',
		text:
			'Knip zelf relevante fragmenten uit het beschikbare beeldmateriaal en bewaar ze in een eigen collectie.',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=2',
		title: 'Doorzoek actueel en Vlaams materiaal',
		text:
			'Vind beeld en geluid van Vlaamse televisieomroepen, musea, archieven en podiumkunstenorganisaties.',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=3',
		title: 'Werk samen met leerlingen',
		text: 'Bundel fragmenten per thema, onderwerp of doel in je eigen lesklare collectie.',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=4',
		title: 'Geselecteerd door leerkrachten',
		text:
			'Laat je inspireren! Blader door tientallen domeinen boordevol relevant beeldmateriaal voor jouw vak.',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=5',
		title: 'Links verdwijnen niet',
		text:
			'Topfragment gespot? Bookmark je favoriete elements en vind ze met gemak terug in je persoonlijke werkruimte.',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=6',
		title: 'test title',
		text: 'test text',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=7',
		title: 'test title',
		text: 'test text',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=8',
		title: 'test title',
		text: 'test text',
		action: { type: 'EXTERNAL_LINK', value: 'http://google.com' },
	},
	{
		source: '/images/500x200.svg?id=9',
		title: 'test title',
		text: 'test text',
	},
];

const navigate = (buttonAction: ButtonAction) => {
	action('navigate')(buttonAction);
	window.location.href = buttonAction.value as string;
};

storiesOf('blocks/BlockGrid', module)
	.addParameters({ jest: ['Image'] })
	.add('BlockGrid 200x200', () => <BlockGrid elements={elements} />)
	.add('BlockGrid 500x200', () => (
		<BlockGrid elements={elements2} imageWidth={500} imageHeight={200} navigate={navigate} />
	))
	.add('BlockGrid wider item then image', () => (
		<BlockGrid
			elements={elements2}
			imageWidth={200}
			imageHeight={150}
			itemWidth={400}
			navigate={navigate}
		/>
	))
	.add('BlockGrid action', () => <BlockGrid elements={elements2} navigate={navigate} />)
	.add('BlockGrid 150x150 fill contain', () => (
		<BlockGrid
			elements={elements2}
			imageWidth={150}
			imageHeight={150}
			fill="contain"
			navigate={navigate}
		/>
	))
	.add('BlockGrid 150x150 fill cover', () => (
		<BlockGrid
			elements={elements2}
			imageWidth={150}
			imageHeight={150}
			fill="cover"
			navigate={navigate}
		/>
	))
	.add('BlockGrid 150x150 fill auto', () => (
		<BlockGrid
			elements={elements2}
			imageWidth={150}
			imageHeight={150}
			fill="auto"
			navigate={navigate}
		/>
	))
	.add('BlockGrid text right', () => (
		<BlockGrid elements={elements2} textAlign="right" navigate={navigate} />
	));
