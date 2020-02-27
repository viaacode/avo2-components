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
	category: EnglishContentType | 'cta';
	cta?: { buttonLabel: string; content: string };
	metadata?: MetaDataItemProps[];
	thumbnail?: { label: string; meta?: string; src?: string };
	title: string;
};

export interface BlockMediaListProps extends DefaultProps {
	elements: MediaListItem[];
	navigate: () => void;
	orientation?: Orientation;
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({
	className,
	elements,
	navigate,
	orientation,
}) => {
	return (
		<div className={classnames(className, 'c-block-media-list c-media-card-list')}>
			<Grid>
				{elements.map(
					({ category, cta = { buttonLabel: '', content: '' }, metadata, thumbnail, title }, i) => (
						<Column key={`block-media-list-${i}`} size="3-3">
							{category !== 'cta' ? (
								<MediaCard
									category={category}
									onClick={navigate}
									orientation={orientation}
									title={title}
								>
									<MediaCardThumbnail>
										<Thumbnail alt={title} category={category} {...thumbnail} />
									</MediaCardThumbnail>
									{metadata && metadata.length > 0 && (
										<MediaCardMetaData>
											<MetaData category={category}>
												{metadata.map(props => (
													<MetaDataItem {...props} />
												))}
											</MetaData>
										</MediaCardMetaData>
									)}
								</MediaCard>
							) : (
								<CTA heading={title} headingType="h3" navigate={navigate} {...cta} />
							)}
						</Column>
					)
				)}
			</Grid>
		</div>
	);
};
