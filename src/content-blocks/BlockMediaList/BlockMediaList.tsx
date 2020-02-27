import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { CTA } from '../../components/CTA/CTA';
import { Column } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { MediaCard } from '../../components/MediaCard/MediaCard';
import { MediaCardMetaData, MediaCardThumbnail } from '../../components/MediaCard/MediaCard.slots';
import { MetaData } from '../../components/MetaData/MetaData';
import {
	MetaDataItem,
	MetaDataItemProps,
} from '../../components/MetaData/MetaDataItem/MetaDataItem';
import { Thumbnail } from '../../components/Thumbnail/Thumbnail';
import { DefaultProps, EnglishContentType, Orientation } from '../../types';

import './BlockMediaList.scss';

export type MediaListItem = {
	category: EnglishContentType;
	metadata?: MetaDataItemProps[];
	thumbnail?: { label: string; meta?: string; src?: string };
	title: string;
};

export interface BlockMediaListProps extends DefaultProps {
	elements: MediaListItem[];
	navigate: () => void;
	orientation?: Orientation;
	ctaTitle?: string;
	ctaContent?: string;
	ctaButtonLabel?: string;
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({
	className,
	ctaButtonLabel = '',
	ctaContent = '',
	ctaTitle = '',
	elements = [],
	navigate,
	orientation,
}) => {
	const hasCTA = ctaTitle || ctaButtonLabel || ctaContent;

	return (
		<div className={classnames(className, 'c-block-media-list c-media-card-list')}>
			<Grid>
				{elements.map(({ category, metadata, thumbnail, title }, i) => (
					<Column key={`block-media-list-${i}`} size="3-3">
						<MediaCard
							category={category}
							onClick={() => navigate()}
							orientation={orientation}
							title={title}
						>
							{thumbnail && (
								<MediaCardThumbnail>
									<Thumbnail alt={title} category={category} {...thumbnail} />
								</MediaCardThumbnail>
							)}
							{metadata && metadata.length > 0 && (
								<MediaCardMetaData>
									<MetaData category={category}>
										{metadata.map((props, i) => (
											<MetaDataItem key={`block-media-list-meta-${i}`} {...props} />
										))}
									</MetaData>
								</MediaCardMetaData>
							)}
						</MediaCard>
					</Column>
				))}
				{hasCTA && (
					<Column size="3-3">
						<CTA
							buttonLabel={ctaButtonLabel}
							heading={ctaTitle}
							content={ctaContent}
							headingType="h3"
							navigate={navigate}
						/>
					</Column>
				)}
			</Grid>
		</div>
	);
};
