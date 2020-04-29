import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Button } from '../../components/Button/Button';
import { ButtonTypeSchema } from '../../components/Button/Button.types';
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
import { DefaultProps, EnglishContentType, HeadingType, Orientation } from '../../types';
import { BlockHeading } from '../BlockHeading/BlockHeading';

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
	ctaTitleSize?: HeadingType;
	ctaContent?: string;
	ctaContentColor?: string;
	ctaButtonLabel?: string;
	ctaButtonType?: ButtonTypeSchema;
	ctaBackgroundColor?: string;
	ctaBackgroundImage?: string;
	ctaWidth?: string;
	ctaNavigate?: () => void;
	elements: MediaListItem[];
	orientation?: Orientation;
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({
	ctaTitle = '',
	ctaTitleColor,
	ctaTitleSize = 'h4',
	ctaContent = '',
	ctaContentColor,
	ctaButtonLabel = '',
	ctaBackgroundColor,
	ctaBackgroundImage,
	ctaButtonType = 'secondary',
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
						<div
							className={classnames(
								className,
								'c-media-card',
								'c-media-card--horizontal',
								'c-media-card__cta',
								{
									'u-clickable': !!ctaNavigate,
								}
							)}
							onClick={() => ctaNavigate && ctaNavigate()}
						>
							<div className="c-media-card-thumb">
								<div
									className="c-thumbnail"
									style={{
										backgroundImage: ctaBackgroundImage ? `url('${ctaBackgroundImage}')` : 'none',
										backgroundColor: ctaBackgroundColor,
									}}
								>
									<div className="c-thumbnail__content">
										{ctaTitle && (
											<BlockHeading type={ctaTitleSize} color={ctaTitleColor}>
												{ctaTitle}
											</BlockHeading>
										)}
										{ctaContent && <div style={{ color: ctaContentColor }}>{ctaContent}</div>}
									</div>
								</div>
							</div>
							<div className="c-media-card-content">
								<Button label={ctaButtonLabel} type={ctaButtonType} />
							</div>
						</div>
					</Column>
				)}
			</Grid>
		</div>
	);
};
