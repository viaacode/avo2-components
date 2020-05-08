import { format } from 'date-fns';
import { findIndex, flatten, get, uniqBy } from 'lodash-es';
import React, { FunctionComponent, ReactNode } from 'react';

import { Accordion, Flex, Pagination, Spacer, Tabs, TagList } from '../../components';
import { ButtonAction, DefaultProps } from '../../types';

import { BlockGrid, GridItem } from '../BlockGrid/BlockGrid';
import { BlockHeading } from '../BlockHeading/BlockHeading';
import { BlockImageTitleTextButton } from '../BlockImageTitleTextButton/BlockImageTitleTextButton';

import './BlockPageOverview.scss';

export type ContentWidthSchema = 'REGULAR' | 'LARGE' | 'MEDIUM';
export type ContentTabStyle = 'ROUNDED_BADGES' | 'MENU_BAR';
export type ContentItemStyle = 'GRID' | 'LIST' | 'ACCORDION';

export interface ContentPageInfo {
	id: number;
	title: string;
	description: string | null;
	created_at: string;
	content_width: ContentWidthSchema;
	// TODO add thumbnail_path to content page in database
	thumbnail_path: string;
	// TODO add labels to content page in database
	labels: LabelObj[];
	blocks?: ReactNode; // Client knows how to convert ContentBlockSchema[] into a ReactNode
	path: string;
}

export type LabelObj = {
	label: string;
	id: number;
};

export interface BlockPageOverviewProps extends DefaultProps {
	tabs?: { label: string; id: number }[];
	tabStyle?: ContentTabStyle;
	allowMultiple?: boolean;
	centerHeader?: boolean;
	itemStyle?: ContentItemStyle;
	showTitle?: boolean;
	showDescription?: boolean;
	showDate?: boolean;
	dateString?: string;
	buttonLabel?: string;
	allLabel?: string;
	noLabel?: string;
	selectedTabs: LabelObj[];
	onSelectedTabsChanged: (selectedTabs: LabelObj[]) => void;
	currentPage: number;
	onCurrentPageChanged: (newPage: number) => void;
	pageCount: number;
	pages: ContentPageInfo[];
	navigate?: (action: ButtonAction) => void;
}

export const BlockPageOverview: FunctionComponent<BlockPageOverviewProps> = ({
	tabs = [],
	tabStyle = 'MENU_BAR',
	allowMultiple = false,
	centerHeader = false,
	itemStyle = 'list',
	showTitle = true,
	showDescription = true,
	showDate = false,
	dateString = 'Geplaatst in %label% op %date%',
	buttonLabel = 'Lees meer',
	allLabel = 'alle',
	noLabel = 'Overige',
	selectedTabs,
	onSelectedTabsChanged,
	currentPage = 0,
	onCurrentPageChanged,
	pageCount,
	pages = [],
	navigate,
}) => {
	const allLabelObj = { label: allLabel, id: -2 };
	const noLabelObj = { label: noLabel, id: -2 };

	const handleTabClick = (tab: LabelObj | undefined) => {
		if (!tab || tab.id === allLabelObj.id) {
			// Click on all selected tabs => clear other filters automatically
			// Empty selected tabs signifies to the outsides: show all items / do not apply any label filters
			onSelectedTabsChanged([]);
			return;
		}

		let newSelectedTabs: LabelObj[];
		if (allowMultiple) {
			const indexOf = findIndex(selectedTabs, { id: tab.id });
			if (indexOf !== -1) {
				// already in the selected tabs => remove the tab
				const newTabs = [...selectedTabs];
				newTabs.splice(indexOf, 1);
				newSelectedTabs = newTabs;
			} else {
				// add the tab
				newSelectedTabs = [...selectedTabs, tab];
			}
		} else {
			// Replace the current selected tab
			newSelectedTabs = [tab];
		}

		// Empty selected tabs signifies to the outsides: show all items / do not apply any label filters
		onSelectedTabsChanged(newSelectedTabs.filter(tab => tab.id !== allLabelObj.id));
	};

	const handlePageClick = (page: ContentPageInfo) => {
		if (navigate) {
			navigate({
				type: 'CONTENT_PAGE',
				value: page.path,
			} as ButtonAction);
		}
	};

	const formatDateString = (dateString: string, page: ContentPageInfo): string => {
		return dateString
			.replace('%label%', get(page, 'labels[0].label', noLabelObj.label))
			.replace('%date%', format(new Date(page.created_at), 'd MMMM yyyy'));
	};

	const renderPages = () => {
		if (itemStyle === 'LIST') {
			return pages.map(page => {
				return (
					<BlockImageTitleTextButton
						imageSource={page.thumbnail_path}
						title={showTitle ? page.title : undefined}
						subtitle={showDate ? formatDateString(dateString, page) : undefined}
						text={showDescription ? page.description || undefined : undefined}
						buttonLabel={buttonLabel}
						onClick={() => handlePageClick(page)}
						key={`content-block-page-${page.id}`}
					/>
				);
			});
		}
		if (itemStyle === 'GRID') {
			const uniqueLabels: LabelObj[] = uniqBy(
				flatten(pages.map((page): LabelObj[] => page.labels)),
				'id'
			);
			const pagesByLabel: { [labelId: number]: ContentPageInfo[] } = Object.fromEntries(
				uniqueLabels.map((labelObj: LabelObj): [number, ContentPageInfo[]] => {
					return [
						labelObj.id,
						pages.filter(page =>
							page.labels.map(pageLabelObj => pageLabelObj.id).includes(labelObj.id)
						),
					];
				})
			);
			// Put the pages that do not have a label under their own category
			pagesByLabel[noLabelObj.id] = pages.filter(page => !page.labels || !page.labels.length);
			const showAllLabels = !selectedTabs.length || selectedTabs[0].id === allLabelObj.id;
			const labelsToShow: LabelObj[] = showAllLabels ? [...tabs, noLabelObj] : selectedTabs;

			return labelsToShow.map(labelObj => {
				return (
					<Spacer margin="top-extra-large" key={`block-page-label-${labelObj.id}`}>
						{(showAllLabels || allowMultiple) && (
							<Spacer margin="left-small">
								<BlockHeading type={'h2'}>{labelObj.label}</BlockHeading>
							</Spacer>
						)}
						<BlockGrid
							elements={(pagesByLabel[labelObj.id] || []).map(
								(page: ContentPageInfo): GridItem => ({
									title: showTitle ? page.title : undefined,
									text: showDescription ? page.description || undefined : undefined,
									source: page.thumbnail_path,
									action: { type: 'CONTENT_PAGE', value: page.id },
								})
							)}
							itemWidth={307}
							imageHeight={172}
							imageWidth={307}
							navigate={navigate}
							fill="cover"
							textAlign="left"
						/>
					</Spacer>
				);
			});
		}
		if (itemStyle === 'ACCORDION') {
			return pages.map(page => {
				return (
					<Accordion title={page.title} isOpen={false} key={`block-page-${page.id}`}>
						{page.blocks}
					</Accordion>
				);
			});
		}
	};

	const renderHeader = () => {
		// if only one tab, only show the content of that one tab, don't show the header
		if (tabs.length > 1) {
			// Add "all" option to the front
			const extendedTabs = [allLabelObj, ...tabs];
			let extendedSelectedTabs: LabelObj[] = selectedTabs;
			if (!extendedSelectedTabs || !extendedSelectedTabs.length) {
				// Select the "all" option if no tabs are selected
				extendedSelectedTabs = [extendedTabs[0]];
			}
			if (tabStyle === 'ROUNDED_BADGES') {
				return (
					<Flex center={centerHeader} className="c-content-page-overview-block__header">
						<Spacer margin={['left', 'bottom', 'right']}>
							<TagList
								tags={extendedTabs.map(tab => ({
									id: tab.id,
									label: tab.label,
									active: !!extendedSelectedTabs.find(extendedTab => extendedTab.id === tab.id),
								}))}
								swatches={false}
								selectable
								onTagClicked={(tagId: string | number) =>
									handleTabClick(tabs.find(tab => tab.id === tagId))
								}
							/>
						</Spacer>
					</Flex>
				);
			}
			if (tabStyle === 'MENU_BAR') {
				return (
					<Flex center={centerHeader} className="c-content-page-overview-block__header">
						<Spacer margin={['left', 'bottom', 'right']}>
							<Tabs
								tabs={extendedTabs.map(tab => ({
									id: tab.id,
									label: tab.label,
									active: !!extendedSelectedTabs.find(extendedTab => extendedTab.id === tab.id),
								}))}
								onClick={tabId => handleTabClick(tabs.find(tab => tab.id === tabId))}
							/>
						</Spacer>
					</Flex>
				);
			}
		} else {
			return null;
		}
	};

	return (
		<div className="c-content-page-overview-block">
			{renderHeader()}
			{renderPages()}
			{pageCount > 1 && (
				<Pagination
					pageCount={pageCount}
					currentPage={currentPage}
					displayCount={5}
					onPageChange={onCurrentPageChanged}
				/>
			)}
		</div>
	);
};
