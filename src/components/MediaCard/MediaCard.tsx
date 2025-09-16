import { type Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { DefaultProps, Orientation } from '../../types';

import './MediaCard.scss';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots';

export interface MediaCardPropsSchema extends DefaultProps {
	title: string;
	category: Avo.ContentType.English;
	subCategory?: Avo.ContentPage.Type;
	children?: ReactNode;
	orientation?: Orientation;
	onClick?: (evt: MouseEvent<HTMLElement>) => void;
}

export const MediaCard: FunctionComponent<MediaCardPropsSchema> = ({
	className,
	title,
	category,
	subCategory,
	children = [],
	orientation = 'vertical',
	onClick,
}) => {
	const thumbnail = useSlot(MediaCardThumbnail, children);
	const metaData = useSlot(MediaCardMetaData, children);

	return (
		<div
			className={clsx(className, 'c-media-card', `c-media-card--${category}`, `c-media-card--${subCategory?.toLowerCase()}`, {
				'c-media-card--horizontal': orientation === 'horizontal',
				'u-clickable': !!onClick,
			})}
			onClick={(evt) => onClick && onClick(evt)}
		>
			{thumbnail && <div className="c-media-card-thumb">{thumbnail}</div>}
			<div className="c-media-card-content">
				<h4 className="c-media-card__title">{title}</h4>
				{metaData && metaData}
			</div>
		</div>
	);
};
