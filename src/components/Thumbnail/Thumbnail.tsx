import React, { FunctionComponent, useEffect, useState } from 'react';

import classNames from 'classnames';

import { ContentType, DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import './Thumbnail.scss';

export interface ThumbnailProps extends DefaultProps {
	category: ContentType;
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
	const iconName = category === 'audio' ? 'headphone' : category;

	useEffect(() => {
		if (src) {
			const img = new Image();
			img.onload = () => setLoaded(true);
			img.src = src;
		}
	}, [src]);

	return (
		<div
			className={classNames(
				className,
				'c-thumbnail',
				'c-thumbnail-media',
				`c-thumbnail-media--${category}`
			)}
		>
			<div className="c-thumbnail-placeholder">{category && <Icon name={iconName} />}</div>
			{src && <div className="c-thumbnail-image" style={{ backgroundImage: `url("${src}")` }} />}
			<div
				className={classNames('c-thumbnail-meta', {
					'c-thumbnail-meta--img-is-loaded': loaded,
				})}
			>
				<div className="c-thumbnail-media__category">
					<Icon name={iconName} />
					{label && <p>{label}</p>}
				</div>
				{meta && <div className="c-thumbnail-media__meta">{meta}</div>}
			</div>
		</div>
	);
};
