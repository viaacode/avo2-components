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
import {
	ButtonAction,
	DefaultProps,
	EnglishContentType,
	HeadingType,
	Orientation,
} from '../../types';
import { BlockHeading } from '../BlockHeading/BlockHeading';

import './BlockMediaList.scss';
import { IconName, Spacer, Toolbar, ToolbarLeft, ToolbarRight } from '../../components';

export type MediaListItem = {
	category: EnglishContentType;
	metadata?: MetaDataItemPropsSchema[];
	thumbnail?: { label: string; meta?: string; src?: string };
	title: string;
	buttonLabel?: string;
	buttonIcon?: IconName;
	buttonType?: ButtonTypeSchema;
	buttonAction: ButtonAction;
};

export interface BlockMediaListProps extends DefaultProps {
	title?: string;
	buttonLabel?: string;
	buttonAction?: ButtonAction;
	ctaTitle?: string;
	ctaTitleColor?: string;
	ctaTitleSize?: HeadingType;
	ctaContent?: string;
	ctaContentColor?: string;
	ctaButtonLabel?: string;
	ctaButtonType?: ButtonTypeSchema;
	ctaButtonIcon?: IconName;
	ctaBackgroundColor?: string;
	ctaBackgroundImage?: string;
	ctaWidth?: string;
	ctaButtonAction?: ButtonAction;
	elements: MediaListItem[];
	orientation?: Orientation;
	navigate?: (buttonAction?: ButtonAction) => void;
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({
	title,
	buttonLabel,
	buttonAction,
	ctaTitle = '',
	ctaTitleColor,
	ctaTitleSize = 'h4',
	ctaContent = '',
	ctaContentColor,
	ctaButtonLabel = '',
	ctaBackgroundColor,
	ctaBackgroundImage,
	ctaButtonType = 'secondary',
	ctaButtonIcon,
	ctaButtonAction,
	className,
	elements = [],
	orientation,
	navigate = () => {},
}) => {
	const hasCTA = ctaTitle || ctaButtonLabel || ctaContent;

	return (
		<div className={classnames(className, 'c-block-media-list c-media-card-list')}>
			{(!!title || !!buttonLabel) && (
				<Toolbar>
					<ToolbarLeft>{title && <BlockHeading type="h2">{title}</BlockHeading>}</ToolbarLeft>
					<ToolbarRight>
						{buttonLabel && (
							<Button label={buttonLabel} type="secondary" onClick={() => navigate(buttonAction)} />
						)}
					</ToolbarRight>
				</Toolbar>
			)}
			<Grid>
				{elements.map(
					(
						{
							category,
							metadata,
							thumbnail,
							title,
							buttonLabel,
							buttonIcon,
							buttonType,
							buttonAction,
						},
						i
					) => (
						<Column key={`block-media-list-${i}`} size="3-3">
							<MediaCard
								category={category}
								onClick={() => navigate(buttonAction)}
								orientation={orientation}
								title={title}
							>
								{thumbnail && (
									<MediaCardThumbnail>
										<Thumbnail alt={title} category={category} {...thumbnail} />
									</MediaCardThumbnail>
								)}
								<MediaCardMetaData>
									{metadata && metadata.length > 0 && (
										<MetaData category={category}>
											{metadata.map((props, i) => (
												<MetaDataItem key={`block-media-list-meta-${i}`} {...props} />
											))}
										</MetaData>
									)}
									{(!!buttonIcon || !!buttonLabel) && (
										<Spacer margin="top-small">
											<Button label={buttonLabel} type={buttonType} icon={buttonIcon} />
										</Spacer>
									)}
								</MediaCardMetaData>
							</MediaCard>
						</Column>
					)
				)}
				{hasCTA && (
					<Column size="3-3">
						<div
							className={classnames(
								className,
								'c-media-card',
								'c-media-card--horizontal',
								'c-media-card__cta',
								{
									'u-clickable': !!ctaButtonAction,
								}
							)}
							onClick={() => navigate(ctaButtonAction)}
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
								<Button label={ctaButtonLabel} type={ctaButtonType} icon={ctaButtonIcon} />
							</div>
						</div>
					</Column>
				)}
			</Grid>
		</div>
	);
};
