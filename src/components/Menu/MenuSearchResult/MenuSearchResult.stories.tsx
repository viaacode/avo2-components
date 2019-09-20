import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '../../../helpers/action';

import { MenuSearchResult } from './MenuSearchResult';
import { MenuSearchResultItemInfo } from './MenuSearchResultContent';

const menuItems: MenuSearchResultItemInfo[] = [
	{ label: 'WK Voetbal', id: 0, type: 'collection' },
	{ label: 'Wereldkampioenschap Voetbal 2018', id: 1, type: 'collection' },
	{ label: 'Journaal: voetbij bij jongeren', id: 2, type: 'bundle' },
	{ label: 'Op één: voetbal', id: 3, type: 'video' },
	{ label: 'Ketnet online: interview wereldbeker voetbal', id: 4, type: 'audio' },
];

storiesOf('MenuSearchResult', module)
	.addParameters({ jest: ['Menu'] })
	.add('MenuSearchResult', () => (
		<MenuSearchResult
			menuItems={menuItems}
			onClick={action('clicked menu item')}
			noResultsLabel="No results"
		/>
	))
	.add('MenuSearchResult no results', () => (
		<MenuSearchResult menuItems={[]} noResultsLabel="No results" />
	));
