import { storiesOf } from '@storybook/react';
import { intersection } from 'lodash-es';
import React, { cloneElement, ReactElement, useEffect, useState } from 'react';

import { action } from '../../helpers';

import { BlockPageOverview, ContentPageInfo } from './BlockPageOverview';
import { CONTENT_PAGES_MOCK } from './BlockPageOverview.mock';

const tabs = ['test1', 'test2'];
const itemsPerPage = 2;
const mockPages = CONTENT_PAGES_MOCK.map(page => ({
	...page,
	blocks: <p>Test content page blocks</p>,
}));

const BlockPageOverviewStoryComponent = ({
	children,
	initialPageIndex = 0,
	itemsOnPage = itemsPerPage,
}: {
	children: ReactElement;
	initialPageIndex?: number;
	itemsOnPage?: number;
}) => {
	const [currentPage, setCurrentPage] = useState<number>(initialPageIndex);
	const [selectedTabs, setSelectedTabs] = useState<string[]>([]);
	const [pages, setPages] = useState<ContentPageInfo[]>(mockPages.slice(0, itemsOnPage));
	const [pageCount, setPageCount] = useState<number>(mockPages.length / itemsOnPage);

	useEffect(() => {
		let filteredPages: ContentPageInfo[];
		if (selectedTabs.length) {
			filteredPages = mockPages.filter(page => {
				return !!intersection(page.labels, selectedTabs).length;
			});
		} else {
			filteredPages = mockPages;
		}
		setPages(filteredPages.slice(itemsOnPage * currentPage, itemsOnPage * (currentPage + 1)));
		setPageCount(Math.ceil(filteredPages.length / itemsOnPage));
	}, [selectedTabs, currentPage, itemsOnPage]);

	return cloneElement(children, {
		currentPage,
		selectedTabs,
		pages,
		pageCount,
		onCurrentPageChanged: (pageIndex: number) => {
			action('page changed')(pageIndex);
			setCurrentPage(pageIndex);
		},
		onSelectedTabsChanged: (tabs: string[]) => {
			action('tabs changed')(tabs);
			setSelectedTabs(tabs);
			setCurrentPage(0);
		},
	});
};

const baseProps = {
	tabs,
	itemsPerPage,
	currentPage: 0,
	onCurrentPageChanged: () => {},
	onSelectedTabsChanged: () => {},
	pageCount: 1,
	pages: [],
	selectedTabs: [],
	itemStyle: 'LIST' as any,
	tabStyle: 'MENU_BAR' as any,
};

storiesOf('blocks/BlockPageOverview', module)
	.addParameters({ jest: ['BlockPageOverview'] })
	.add('BlockPageOverview menu list', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0}>
			<BlockPageOverview {...baseProps} />
		</BlockPageOverviewStoryComponent>
	))
	.add('BlockPageOverview accordions', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0}>
			<BlockPageOverview {...baseProps} itemStyle="ACCORDION" />
		</BlockPageOverviewStoryComponent>
	))
	.add('BlockPageOverview menu grid', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0} itemsOnPage={1000}>
			<BlockPageOverview {...baseProps} itemStyle="GRID" />
		</BlockPageOverviewStoryComponent>
	))
	.add('BlockPageOverview menu grid multi', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0} itemsOnPage={1000}>
			<BlockPageOverview {...baseProps} itemStyle="GRID" allowMultiple />
		</BlockPageOverviewStoryComponent>
	))
	.add('BlockPageOverview badges', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0}>
			<BlockPageOverview {...baseProps} tabStyle={'ROUNDED_BADGES'} />
		</BlockPageOverviewStoryComponent>
	))
	.add('BlockPageOverview badges allow multiple', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0}>
			<BlockPageOverview {...baseProps} tabStyle={'ROUNDED_BADGES'} allowMultiple />
		</BlockPageOverviewStoryComponent>
	));
