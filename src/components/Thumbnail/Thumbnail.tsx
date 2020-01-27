import React, { FunctionComponent, useEffect, useState } from 'react';

import classnames from 'classnames';

import { DefaultProps, EnglishContentType } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/types';

import './Thumbnail.scss';

const CATEGORY_TO_ICON: { [category: string]: IconName } = {
	audio: 'headphone',
	video: 'video',
	collection: 'collection',
	bundle: 'folder',
};

export interface ThumbnailProps extends DefaultProps {
	category: EnglishContentType;
	src?: string;
	alt?: string;
	label?: string;
	meta?: string;
}

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({
	category,
	className,
	src,
	alt,
	label,
	meta,
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
				img.onload = () => {};
			}
		};
	}, [src]);

	return (
		<div
			className={classnames(
				className,
				'c-thumbnail',
				'c-thumbnail-media',
				`c-thumbnail-media--${category}`
			)}
		>
			<div className="c-thumbnail-placeholder">{category && <Icon name={iconName} />}</div>
			{src && (
				<div
					className="c-thumbnail-image"
					style={{ backgroundImage: `url("${src}")` }}
					title={alt}
				/>
			)}
			{(label || meta) && (
				<div
					className={classnames('c-thumbnail-meta', {
						'c-thumbnail-meta--img-is-loaded': loaded,
					})}
				>
					<div className="c-thumbnail-media__category">
						<Icon name={iconName} />
						{label && <p>{label}</p>}
					</div>
					{meta && <div className="c-thumbnail-media__meta">{meta}</div>}
				</div>
			)}
		</div>
	);
};
