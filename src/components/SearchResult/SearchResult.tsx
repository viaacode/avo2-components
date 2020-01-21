import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { useSlot } from '../../hooks/useSlot';
import {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './SearchResult.slots';

import { DefaultProps, EnglishContentType } from '../../types';
import { Flex } from '../Flex/Flex';
import { FlexItem } from '../Flex/FlexItem/FlexItem';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Spacer } from '../Spacer/Spacer';
import { TagList } from '../TagList/TagList';
import { ToggleButton } from '../ToggleButton/ToggleButton';

import './SearchResult.scss';

export interface SearchResultProps extends DefaultProps {
	children: ReactNode;
	type: EnglishContentType;
	thumbnailPath?: string;
	description?: string;
	maxDescriptionLength?: number;
	date: string;
	bookmarkCount: number;
	viewCount: number;
	tags?: { label: string; id: string }[];
	onToggleBookmark?: (active: boolean) => void;
}

export const SearchResult: FunctionComponent<SearchResultProps> = ({
	children,
	className,
	type,
	description = '',
	maxDescriptionLength = 300,
	date,
	bookmarkCount,
	viewCount,
	tags = [],
	onToggleBookmark = () => {},
}) => {
	const title = useSlot(SearchResultTitle, children);
	const subTitle = useSlot(SearchResultSubtitle, children);
	const thumbnail = useSlot(SearchResultThumbnail, children);

	const getTruncatedDescription = () => {
		if (description.length > maxDescriptionLength - 3) {
			return `${description.substring(0, maxDescriptionLength)}...`;
		}
		return description;
	};

	return (
		<div className={classnames(className, 'c-search-result')}>
			<div className="c-search-result__image">{thumbnail}</div>
			<div className="c-search-result__content">
				<Flex align="start" justify="between">
					<FlexItem>
						<h2 className="c-search-result__title">{title}</h2>
						{subTitle}
					</FlexItem>
					<FlexItem shrink>
						<div className="c-button-toolbar">
							<ToggleButton
								active={false}
								icon="bookmark"
								onClick={(active: boolean) => onToggleBookmark(active)}
								ariaLabel="toggle bookmark"
							/>
						</div>
					</FlexItem>
				</Flex>
				<p className="c-search-result__description">{getTruncatedDescription()}</p>
				<Spacer margin="bottom-small">
					<Flex justify="between" wrap>
						<MetaData category={type}>
							<MetaDataItem label={date} />
							<MetaDataItem
								label={String(viewCount)}
								icon={type === 'audio' ? 'headphone' : 'eye'}
							/>
							<MetaDataItem label={String(bookmarkCount)} icon="bookmark" />
						</MetaData>
						<TagList tags={tags} swatches={false} />
					</Flex>
				</Spacer>
			</div>
		</div>
	);
};
