import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { useSlot } from '../../hooks/useSlot';

import { DefaultProps, EnglishContentType, Orientation } from '../../types';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

import './MediaCard.scss';

export interface MediaCardProps extends DefaultProps {
	title: string;
	category: EnglishContentType;
	children?: ReactNode;
	orientation?: Orientation;
	onClick?: () => void;
}

export const MediaCard: FunctionComponent<MediaCardProps> = ({
	className,
	title,
	category,
	children = [],
	orientation = 'vertical',
	onClick,
}) => {
	const thumbnail = useSlot(MediaCardThumbnail, children);
	const metaData = useSlot(MediaCardMetaData, children);

	return (
		<div
			className={classnames(className, 'c-media-card', `c-media-card--${category}`, {
				'c-media-card--horizontal': orientation === 'horizontal',
				'u-clickable': !!onClick,
			})}
			onClick={() => onClick && onClick()}
		>
			{thumbnail && <div className="c-media-card-thumb">{thumbnail}</div>}
			<div className="c-media-card-content">
				<h4 className="c-media-card__title">{title}</h4>
				{metaData && metaData}
			</div>
		</div>
	);
};
