import { Avo } from '@viaa/avo2-types';
import classnames from 'clsx';
import { isNil, noop, truncate } from 'lodash-es';
import React, { FunctionComponent, ReactNode, ReactText } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { DefaultProps } from '../../types';
import { Flex } from '../Flex/Flex';
import { FlexItem } from '../Flex/FlexItem/FlexItem';
import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Spacer } from '../Spacer/Spacer';
import { TagList, TagOptionSchema } from '../TagList/TagList';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip.slots';

import './SearchResult.scss';
import {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './SearchResult.slots';

export interface SearchResultPropsSchema extends DefaultProps {
	children: ReactNode;
	type: Avo.ContentType.English;
	thumbnailPath?: string;
	description?: string;
	maxDescriptionLength?: number;
	isBookmarked: boolean | null;
	date: string;
	dateTooltip: string;
	bookmarkCount: number | null; // null hides the counter
	viewCount: number;
	tags?: TagOptionSchema[];
	onToggleBookmark?: (active: boolean) => void;
	onTagClicked?: (tagId: string) => void;
}

export const SearchResult: FunctionComponent<SearchResultPropsSchema> = ({
	children,
	className,
	type,
	description = '',
	maxDescriptionLength = 300,
	isBookmarked,
	date,
	dateTooltip,
	bookmarkCount,
	viewCount,
	tags = [],
	onToggleBookmark = noop,
	onTagClicked = noop,
}) => {
	const title = useSlot(SearchResultTitle, children);
	const subTitle = useSlot(SearchResultSubtitle, children);
	const thumbnail = useSlot(SearchResultThumbnail, children);

	return (
		<div className={classnames(className, 'c-search-result')}>
			<div className="c-search-result__image">{thumbnail}</div>
			<div className="c-search-result__content">
				<Flex align="start" justify="between">
					<FlexItem>
						<h2 className="c-search-result__title">{title}</h2>
						{subTitle}
					</FlexItem>
					{!isNil(isBookmarked) && (
						<FlexItem shrink>
							<div className="c-button-toolbar">
								<ToggleButton
									active={isBookmarked}
									icon={IconNameSchema.bookmark}
									onClick={(active: boolean) => onToggleBookmark(active)}
									ariaLabel="toggle bookmark"
								/>
							</div>
						</FlexItem>
					)}
				</Flex>
				<p className="c-search-result__description">
					{truncate(description, { length: maxDescriptionLength })}
				</p>
				<Spacer margin="bottom-small">
					<Flex justify="between" wrap>
						<MetaData category={type}>
							<Tooltip position="right">
								<TooltipTrigger>
									<MetaDataItem label={date} />
								</TooltipTrigger>
								<TooltipContent>
									<span>{dateTooltip}</span>
								</TooltipContent>
							</Tooltip>
							<MetaDataItem label={String(viewCount)} icon={IconNameSchema.eye} />
							{!isNil(bookmarkCount) && (
								<MetaDataItem
									label={String(bookmarkCount)}
									icon={IconNameSchema.bookmark}
								/>
							)}
						</MetaData>
						<TagList
							tags={tags}
							swatches={false}
							onTagClicked={(tagId: ReactText) => onTagClicked(tagId.toString())}
						/>
					</Flex>
				</Spacer>
			</div>
		</div>
	);
};
