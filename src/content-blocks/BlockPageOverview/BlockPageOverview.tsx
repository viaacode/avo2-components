import { format } from 'date-fns';
import { groupBy } from 'lodash-es';
import React, { FunctionComponent, ReactText } from 'react';

import {
	BlockGrid,
	BlockHeading,
	BlockImageTitleTextButton,
	ButtonAction,
	Spacer,
	Tabs,
	TagList,
} from '../..';
import { DefaultProps } from '../../types';
import { GridItem } from '../BlockGrid/BlockGrid';

export type ContentWidthSchema = 'REGULAR' | 'LARGE' | 'MEDIUM';

interface ContentPage {
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
	itemStyle?: 'grid' | 'list';
	showTitle?: boolean;
	showDescription?: boolean;
	showDate?: boolean;
	dateString?: string;
	buttonLabel?: string;
	allLabel?: string;
	selectedTabs: string[];
	selectedTabsChanged: (selectedTabs: string[]) => void;
	pages: ContentPage[];
	navigate?: (action: ButtonAction) => void;
}

export const BlockPageOverview: FunctionComponent<BlockPageOverviewProps> = ({
	tabs = [],
	tabStyle = 'MENU_BAR',
	allowMultiple = false,
	itemStyle = 'list',
	showTitle = false,
	showDescription = false,
	showDate = false,
	dateString = 'Geplaatst in %label% op %date%',
	buttonLabel = 'Lees meer',
	allLabel = 'alle',
	selectedTabs,
	selectedTabsChanged,
	pages = [],
	navigate,
}) => {
	const handleTabClick = (tab: string) => {
		if (allowMultiple) {
			const indexOf = selectedTabs.indexOf(tab);
			if (indexOf !== -1) {
				// already in the selected tabs => remove the tab
				const newTabs = [...selectedTabs];
				newTabs.splice(indexOf, 1);
				selectedTabsChanged(newTabs);
			} else {
				// add the tab
				selectedTabsChanged([...selectedTabs, tab]);
			}
		} else {
			// Replace the current selected tab
			selectedTabsChanged([tab]);
		}
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
		if (itemStyle === 'list') {
			return pages.map(page => {
				return (
					<BlockImageTitleTextButton
						imageSource={page.thumbnail_path}
						title={showTitle ? page.title : undefined}
						subtitle={showDate ? formatDateString(dateString, page) : undefined}
						text={showDescription ? page.description || undefined : undefined}
						buttonLabel={buttonLabel}
						onClick={() => handlePageClick(page)}
					/>
				);
			});
		}
		if (itemStyle === 'grid') {
			const pagesByLabel = groupBy(pages, page => page.labels[0]);
			return Object.keys(pagesByLabel)
				.sort()
				.map(label => {
					return (
						<Spacer margin="top-large">
							<BlockHeading type={'h2'}>{label}</BlockHeading>
							<BlockGrid
								elements={pagesByLabel[label].map(
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
			const extendedTabs = [allLabel, ...tabs];
			if (tabStyle === 'ROUNDED_BADGES') {
				return (
					<TagList
						tags={extendedTabs.map(tab => ({
							id: tab,
							label: tab,
							active: selectedTabs.includes(tab),
						}))}
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
							active: selectedTabs.includes(tab),
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
		</div>
	);
};
