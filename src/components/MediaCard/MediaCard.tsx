import type { Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import type { FunctionComponent, MouseEvent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot.js';
import type { DefaultProps, Orientation } from '../../types/index.js';

import './MediaCard.scss';
import { handleEnterOrSpace } from '../../utils/index.js';
import { MediaCardMetaData, MediaCardThumbnail } from './MediaCard.slots.js';

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
		// biome-ignore lint/a11y/noStaticElementInteractions: TODO fix
		<div
			className={clsx(
				className,
				'c-media-card',
				`c-media-card--${category}`,
				`c-media-card--${subCategory?.toLowerCase()}`,
				{
					'c-media-card--horizontal': orientation === 'horizontal',
					'u-clickable': !!onClick,
				}
			)}
			onClick={onClick}
			onKeyUp={handleEnterOrSpace(onClick)}
		>
			{thumbnail && <div className="c-media-card-thumb">{thumbnail}</div>}
			<div className="c-media-card-content">
				<h4 className="c-media-card__title">{title}</h4>
				{metaData && metaData}
			</div>
		</div>
	);
};
