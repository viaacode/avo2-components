import { format } from 'date-fns';
import { flatten, groupBy, uniq } from 'lodash-es';
import React, { FunctionComponent, ReactText } from 'react';

import {
	BlockGrid,
	BlockHeading,
	BlockImageTitleTextButton,
	ButtonAction,
	Pagination,
	Spacer,
	Tabs,
	TagList,
} from '../..';
import { DefaultProps } from '../../types';
import { GridItem } from '../BlockGrid/BlockGrid';

export type ContentWidthSchema = 'REGULAR' | 'LARGE' | 'MEDIUM';

export interface ContentPage {
	id: number;
	title: string;
	description: string | null;
	created_at: string;
	content_type: string;
	content_width: ContentWidthSchema;
	// TODO add thumbnail_path to content page
	thumbnail_path: string;
	// TODO add labels to content page
	labels: string[];
}

export interface BlockPageOverviewProps extends DefaultProps {
	tabs?: string[];
	tabStyle?: 'ROUNDED_BADGES' | 'MENU_BAR';
	allowMultiple?: boolean;
	contentType: string; // lookup options in lookup.enum_content_types
	itemStyle?: 'GRID' | 'LIST';
	showTitle?: boolean;
	showDescription?: boolean;
	showDate?: boolean;
	dateString?: string;
	buttonLabel?: string;
	allLabel?: string;
	noLabel?: string;
	selectedTabs: string[];
	onSelectedTabsChanged: (selectedTabs: string[]) => void;
	currentPage: number;
	onCurrentPageChanged: (newPage: number) => void;
	pageCount: number;
	itemsPerPage?: number;
	pages: ContentPage[];
	navigate?: (action: ButtonAction) => void;
}

export const BlockPageOverview: FunctionComponent<BlockPageOverviewProps> = ({
	tabs = [],
	tabStyle = 'MENU_BAR',
	allowMultiple = false,
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
	const handleTabClick = (tab: string) => {
		if (tab === allLabel) {
			// Click on all selected tabs => clear other filters automatically
			// Empty selected tabs signifies to the outsides: show all items / do not apply any label filters
			onSelectedTabsChanged([]);
			return;
		}

		let newSelectedTabs: string[];
		if (allowMultiple) {
			const indexOf = selectedTabs.indexOf(tab);
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
		onSelectedTabsChanged(newSelectedTabs.filter(tab => tab !== allLabel));
	};

	const handlePageClick = (page: ContentPage) => {
		if (navigate) {
			navigate({
				type: 'CONTENT_PAGE',
				value: page.id,
			} as ButtonAction);
		}
	};

	const formatDateString = (dateString: string, page: ContentPage): string => {
		return dateString
			.replace('%label%', page.labels[0])
			.replace('%', format(new Date(page.created_at), 'd MMMM yyyy'));
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
			const uniqueLabels: string[] = uniq(flatten(pages.map((page): string[] => page.labels)));
			const pagesByLabel = Object.fromEntries(
				uniqueLabels.map((label: string): [string, ContentPage[]] => {
					return [label, pages.filter(page => page.labels.includes(label))];
				})
			);
			// Put the pages that do not have a label under their own category
			pagesByLabel[noLabel] = pages.filter(page => !page.labels || !page.labels.length);
			const showAllLabels = !selectedTabs.length || selectedTabs[0] === allLabel;
			const labelsToShow = showAllLabels ? [...tabs, noLabel] : selectedTabs;

			return labelsToShow.map(label => {
				return (
					<Spacer margin="top-extra-large" key={`block-page-label-${label}`}>
						{(showAllLabels || allowMultiple) && (
							<Spacer margin="left-small">
								<BlockHeading type={'h2'}>{label}</BlockHeading>
							</Spacer>
						)}
						<BlockGrid
							elements={(pagesByLabel[label] || []).map(
								(page: ContentPage): GridItem => ({
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
	};

	const renderHeader = () => {
		if (tabs.length) {
			// Add "all" option to the front
			const extendedTabs = [allLabel, ...tabs];
			let extendedSelectedTabs: string[] = selectedTabs;
			if (!extendedSelectedTabs || !extendedSelectedTabs.length) {
				// Select the "all" option if no tabs are selected
				extendedSelectedTabs = [extendedTabs[0]];
			}
			if (tabStyle === 'ROUNDED_BADGES') {
				return (
					<TagList
						tags={extendedTabs.map(tab => ({
							id: tab,
							label: tab,
							active: extendedSelectedTabs.includes(tab),
						}))}
						swatches={false}
						onTagClicked={(tagId: string | number) => handleTabClick(tagId as string)}
					/>
				);
			}
			if (tabStyle === 'MENU_BAR') {
				return (
					<Tabs
						tabs={extendedTabs.map(tab => ({
							id: tab,
							label: tab,
							active: extendedSelectedTabs.includes(tab),
						}))}
						onClick={(tabId: ReactText) => handleTabClick(tabId.toString())}
					/>
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
