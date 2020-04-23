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
	MetaDataItemPropsSchema,
} from '../../components/MetaData/MetaDataItem/MetaDataItem';
import { Thumbnail } from '../../components/Thumbnail/Thumbnail';
import { DefaultProps, EnglishContentType, Orientation } from '../../types';

import './BlockMediaList.scss';

export type MediaListItem = {
	category: EnglishContentType;
	metadata?: MetaDataItemPropsSchema[];
	navigate: () => void;
	thumbnail?: { label: string; meta?: string; src?: string };
	title: string;
};

export interface BlockMediaListProps extends DefaultProps {
	ctaTitle?: string;
	ctaTitleColor?: string;
	ctaContent?: string;
	ctaContentColor?: string;
	ctaButtonLabel?: string;
	ctaBackgroundColor?: string;
	ctaWidth?: string;
	ctaNavigate?: () => void;
	elements: MediaListItem[];
	orientation?: Orientation;
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({
	ctaTitle = '',
	ctaTitleColor,
	ctaContent = '',
	ctaContentColor,
	ctaButtonLabel = '',
	ctaBackgroundColor,
	ctaWidth = '100%',
	ctaNavigate = () => {},
	className,
	elements = [],
	orientation,
}) => {
	const hasCTA = ctaTitle || ctaButtonLabel || ctaContent;

	return (
		<div className={classnames(className, 'c-block-media-list c-media-card-list')}>
			<Grid>
				{elements.map(({ category, metadata, navigate, thumbnail, title }, i) => (
					<Column key={`block-media-list-${i}`} size="3-3">
						<MediaCard
							category={category}
							onClick={navigate}
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
							headingColor={ctaTitleColor}
							content={ctaContent}
							contentColor={ctaContentColor}
							headingType="h3"
							backgroundColor={ctaBackgroundColor}
							navigate={ctaNavigate}
							width={ctaWidth}
						/>
					</Column>
				)}
			</Grid>
		</div>
	);
};
