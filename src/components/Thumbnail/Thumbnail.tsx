import { type Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import { noop } from '../../helpers/noop';
import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import './Thumbnail.scss';

export const CATEGORY_TO_ICON: { [category: string]: IconNameSchema } = {
	audio: IconNameSchema.headphone,
	video: IconNameSchema.video,
	collection: IconNameSchema.collection,
	bundle: IconNameSchema.folder,
	search: IconNameSchema.search,
	assignment: IconNameSchema.clipboard,
};

export interface ThumbnailPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	category: Avo.ContentType.English;
	src?: string;
	alt?: string;
	label?: string;
	meta?: string;
	topRight?: ReactNode;
	onClick?: () => void;
	showCategoryIcon?: boolean;
}

export const Thumbnail: FunctionComponent<ThumbnailPropsSchema> = ({
	category,
	className,
	src,
	alt,
	label,
	meta,
	topRight,
	onClick = noop,
	style,
	showCategoryIcon = false,
}) => {
	const [loaded, setLoaded] = useState(false);
	const iconName = CATEGORY_TO_ICON[category];

	useEffect(() => {
		let img: HTMLImageElement | null = null;

		if (src) {
			img = new Image();
			img.onload = () => setLoaded(true);
			img.src = src;
		}

		return () => {
			if (img) {
				img.onload = noop;
			}
		};
	}, [src]);

	return (
		<div
			className={clsx(
				className,
				'c-thumbnail',
				'c-thumbnail-media',
				`c-thumbnail-media--${category}`
			)}
			style={style}
			onClick={onClick}
		>
			<div className="c-thumbnail-placeholder">{category && <Icon name={iconName} />}</div>
			{src && (
				<div
					className="c-thumbnail-image"
					style={{ backgroundImage: `url("${src}")` }}
					title={alt}
				/>
			)}
			{(label || meta || showCategoryIcon) && (
				<div
					className={clsx('c-thumbnail-meta', {
						'c-thumbnail-meta--img-is-loaded': loaded,
					})}
				>
					<div className="c-thumbnail-media__category">
						<Icon name={iconName} />
						{label && <p>{label}</p>}
					</div>
					{!!meta && <div className="c-thumbnail-media__meta">{meta}</div>}
					{!!topRight && <div className="c-thumbnail-media__top-right">{topRight}</div>}
				</div>
			)}
		</div>
	);
};
