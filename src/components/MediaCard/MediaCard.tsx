import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { Icon } from '../Icon/Icon';
import { Thumbnail } from '../Thumbnail/Thumbnail';

export interface MediaCardProps {
	orientation?: 'horizontal' | 'vertical';
	title: string;
	href: string;
	meta?: string;
	thumbnailCategory: 'collection' | 'video' | 'audio';
	thumbnailSrc?: string;
	thumbnailAlt?: string;
	thumbnailLabel?: string;
	thumbnailMeta?: string;
}

export const MediaCard: FunctionComponent<MediaCardProps> = ({
	orientation = 'vertical',
	title,
	href,
	meta,
	thumbnailCategory,
	thumbnailSrc,
	thumbnailAlt,
	thumbnailLabel,
	thumbnailMeta,
}: MediaCardProps) => (
	<div
		className={classNames('c-media-card c-media-card--{category}', {
			'c-media-card--horizontal': orientation === 'horizontal',
		})}
	>
		<a className="c-media-card-thumb" href={href}>
			<Thumbnail
				category={thumbnailCategory}
				src={thumbnailSrc}
				alt={thumbnailAlt}
				meta={thumbnailMeta}
				label={thumbnailLabel}
			/>
		</a>
		<div className="c-media-card-content">
			<h4 className="c-media-card__title">
				<a href={href}>{title}</a>
			</h4>
			{meta}
		</div>
	</div>
);
