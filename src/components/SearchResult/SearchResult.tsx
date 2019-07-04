import React, { FunctionComponent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot';
import {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './SearchResult.slots';

import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaDataItem/MetaDataItem';
import { TagList } from '../TagList/TagList';
import { ToggleButton } from '../ToggleButton/ToggleButton';

export interface SearchResultProps {
	children: ReactNode;
	type: 'collection' | 'video' | 'audio';
	thumbnailPath?: string;
	description?: string;
	date: string;
	bookmarkCount: number;
	viewCount: number;
	tags?: string[];
	onToggleBookmark?: (active: boolean) => void;
}

export const SearchResult: FunctionComponent<SearchResultProps> = ({
	children,
	type,
	description = '',
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
		<div className="c-search-result">
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
				<p className="c-search-result__description">{description.substring(0, 240)}</p>
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
