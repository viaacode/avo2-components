import type { Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import type React from 'react';
import { type FunctionComponent, type ReactNode, useEffect, useState } from 'react';

import { noop } from '../../helpers/noop.js';
import type { DefaultProps } from '../../types/index.js';
import { Icon } from '../Icon/Icon.js';
import { IconNameSchema } from '../Icon/Icon.types.js';

import './Thumbnail.scss';
import { handleEnterOrSpace } from '../../utils/index.js';

export const CATEGORY_TO_ICON: { [category: string]: IconNameSchema } = {
	audio: IconNameSchema.headphone,
	video: IconNameSchema.video,
	collection: IconNameSchema.collection,
	bundle: IconNameSchema.folder,
	search: IconNameSchema.search,
	assignment: IconNameSchema.clipboard,
	contentPage: IconNameSchema.layout,
	'contentPage.nieuws_item': IconNameSchema.layout,
	'contentPage.pagina': IconNameSchema.layout,
	'contentPage.project': IconNameSchema.layout,
	'contentPage.overzicht': IconNameSchema.layout,
	'contentPage.domein_detail': IconNameSchema.layout,
	'contentPage.event_detail': IconNameSchema.calendar,
	'contentPage.screencast': IconNameSchema.helpCircle,
};

export interface ThumbnailPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	category: Avo.ContentType.English;
	subCategory?: Avo.ContentPage.Type;
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
	subCategory,
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
	const lowerSubCategory = subCategory?.toLowerCase();
	const iconName =
		CATEGORY_TO_ICON[lowerSubCategory ? `${category}.${lowerSubCategory}` : category];

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
		// biome-ignore lint/a11y/noStaticElementInteractions: TODO fix
		<div
			className={clsx(
				className,
				'c-thumbnail',
				'c-thumbnail-media',
				`c-thumbnail-media--${category}`,
				`c-thumbnail-media--${lowerSubCategory}`
			)}
			style={style}
			onClick={onClick}
			onKeyUp={handleEnterOrSpace(onClick)}
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
