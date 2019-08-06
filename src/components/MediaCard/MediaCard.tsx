import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { useSlot } from '../../hooks/useSlot';

import { ContentType, DefaultProps } from '../../types';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

export interface MediaCardProps extends DefaultProps {
	title: string;
	href: string;
	category: ContentType;
	children?: ReactNode;
	orientation?: 'horizontal' | 'vertical';
}

export const MediaCard: FunctionComponent<MediaCardProps> = ({
	className,
	title,
	href,
	category,
	children = [],
	orientation = 'vertical',
}: MediaCardProps) => {
	const thumbnail = useSlot(MediaCardThumbnail, children);
	const metaData = useSlot(MediaCardMetaData, children);

	return (
		<div
			className={classNames(className, 'c-media-card', `c-media-card--${category}`, {
				'c-media-card--horizontal': orientation === 'horizontal',
			})}
		>
			{thumbnail && (
				<a className="c-media-card-thumb" href={href}>
					{thumbnail}
				</a>
			)}
			<div className="c-media-card-content">
				<h4 className="c-media-card__title">
					<a href={href}>{title}</a>
				</h4>
				{metaData && metaData}
			</div>
		</div>
	);
};
