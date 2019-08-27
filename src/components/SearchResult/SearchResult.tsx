import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { useSlot } from '../../hooks/useSlot';
import {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './SearchResult.slots';

import { ContentType, DefaultProps } from '../../types';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaDataItem/MetaDataItem';
import { TagList } from '../TagList/TagList';
import { ToggleButton } from '../ToggleButton/ToggleButton';

export interface SearchResultProps extends DefaultProps {
	children: ReactNode;
	type: ContentType;
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
}: SearchResultProps) => {
	const title = useSlot(SearchResultTitle, children);
	const subTitle = useSlot(SearchResultSubtitle, children);
	const thumbnail = useSlot(SearchResultThumbnail, children);

	return (
		<div className={classnames(className, 'c-search-result')}>
			<div className="c-search-result__image">{thumbnail}</div>
			<div className="c-search-result__content">
				<div className="o-flex o-flex--justify-between o-flex--align-top">
					<div className="o-flex__item">
						<h2 className="c-search-result__title">{title}</h2>
						{subTitle}
					</div>
					<div className="o-flex__item o-flex__item--shrink">
						<div className="c-button-toolbar">
							<ToggleButton
								active={false}
								icon="bookmark"
								onClick={(active: boolean) => onToggleBookmark(active)}
								ariaLabel="toggle bookmark"
							/>
						</div>
					</div>
				</div>
				<p className="c-search-result__description">{`${description.substring(
					0,
					maxDescriptionLength
				)}...`}</p>
				<div className="u-spacer-bottom-s">
					<div className="o-flex o-flex--justify-between o-flex--wrap">
						<MetaData category={type}>
							<MetaDataItem label={date} />
							<MetaDataItem
								label={String(viewCount)}
								icon={type === 'audio' ? 'headphone' : 'eye'}
							/>
							<MetaDataItem label={String(bookmarkCount)} icon="bookmark" />
						</MetaData>
						<TagList tags={tags} swatches={false} />
					</div>
				</div>
			</div>
		</div>
	);
};
