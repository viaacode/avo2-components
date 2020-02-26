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
import { ButtonAction, DefaultProps, EnglishContentType, Orientation } from '../../types';

import './BlockMediaList.scss';

export type MediaListItem = {
	action: ButtonAction;
	category: EnglishContentType;
	metadata?: MetaDataItemProps[];
	thumbnail?: { label: string; meta?: string; src?: string };
	title: string;
};

export interface BlockMediaListProps extends DefaultProps {
	elements: MediaListItem[];
	navigate: (action: ButtonAction) => void;
	orientation?: Orientation;
	ctaTitle?: string;
	ctaContent?: string;
	ctaButtonAction?: ButtonAction;
	ctaButtonLabel?: string;
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({
	className,
	ctaButtonAction = { type: 'COLLECTION', value: '' },
	ctaButtonLabel = '',
	ctaContent = '',
	ctaTitle = '',
	elements = [],
	navigate,
	orientation,
}) => {
	return (
		<div className={classnames(className, 'c-block-media-list c-media-card-list')}>
			<Grid>
				{elements.map(({ action, category, metadata, thumbnail, title }, i) => (
					<Column key={`block-media-list-${i}`} size="3-3">
						<MediaCard
							category={category}
							onClick={() => navigate(action)}
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
				{(ctaTitle || ctaButtonLabel || ctaButtonAction.value) && (
					<Column size="3-3">
						<CTA
							buttonAction={ctaButtonAction}
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
