import { storiesOf } from '@storybook/react';
import { intersectionBy } from 'lodash-es';
import React, { cloneElement, ReactElement, useEffect, useState } from 'react';

import { action } from '../../helpers';

import { BlockPageOverview, ContentPageInfo, LabelObj } from './BlockPageOverview';
import { CONTENT_PAGES_MOCK } from './BlockPageOverview.mock';
import { Container } from '../../components';

const tabs = [
	{ label: 'test1', id: 1 },
	{ label: 'test2', id: 2 },
];
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
	const [selectedTabs, setSelectedTabs] = useState<LabelObj[]>([]);
	const [pages, setPages] = useState<ContentPageInfo[]>(mockPages.slice(0, itemsOnPage));
	const [pageCount, setPageCount] = useState<number>(mockPages.length / itemsOnPage);

	useEffect(() => {
		let filteredPages: ContentPageInfo[];
		if (selectedTabs.length) {
			filteredPages = mockPages.filter(page => {
				return !!intersectionBy(page.labels, selectedTabs, (labelObj: LabelObj) => labelObj.id)
					.length;
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
		onSelectedTabsChanged: (tabs: LabelObj[]) => {
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
	.add('BlockPageOverview header background + center', () => (
		<>
			<Container background="alt" mode="vertical">
				<Container mode="horizontal">
					test block above the page block iwth identical background as the header
				</Container>
			</Container>
			<BlockPageOverviewStoryComponent initialPageIndex={0}>
				<BlockPageOverview {...baseProps} headerBackgroundColor="#EDEFF2" centerHeader />
			</BlockPageOverviewStoryComponent>
		</>
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
	))
	.add('BlockPageOverview show date', () => (
		<BlockPageOverviewStoryComponent initialPageIndex={0}>
			<BlockPageOverview {...baseProps} showDate dateString="Geplaatst in %label% op %date%" />
		</BlockPageOverviewStoryComponent>
	));
