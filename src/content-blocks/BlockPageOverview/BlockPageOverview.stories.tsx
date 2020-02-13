import { storiesOf } from '@storybook/react';
import { intersection } from 'lodash-es';
import React, { cloneElement, ReactElement, useEffect, useState } from 'react';

import { action } from '../../helpers';

import { BlockPageOverview, ContentPage } from './BlockPageOverview';
import { CONTENT_PAGES_MOCK } from './BlockPageOverview.mock';

const tabs = ['test1', 'test2'];
const itemsPerPage = 2;

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
	const [pages, setPages] = useState<ContentPage[]>(CONTENT_PAGES_MOCK.slice(0, itemsOnPage));
	const [pageCount, setPageCount] = useState<number>(CONTENT_PAGES_MOCK.length / itemsOnPage);

	useEffect(() => {
		let filteredPages: ContentPage[];
		if (selectedTabs.length) {
			filteredPages = CONTENT_PAGES_MOCK.filter(page => {
				return !!intersection(page.labels, selectedTabs).length;
			});
		} else {
			filteredPages = CONTENT_PAGES_MOCK;
		}
		setPages(filteredPages.slice(itemsOnPage * currentPage, itemsOnPage * (currentPage + 1)));
		setPageCount(Math.ceil(filteredPages.length / itemsOnPage));
	}, [selectedTabs, currentPage]);

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
