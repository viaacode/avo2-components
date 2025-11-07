import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import { noop } from '../../helpers/noop.js';
import type { DefaultProps } from '../../types/index.js';

import './ImageGrid.scss';
import { handleEnterOrSpace } from '../../utils/index.js';

export interface ImageGridPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	images: string[];
	value?: string[];
	width?: number;
	height?: number;
	fill?: 'cover' | 'contain' | 'auto';
	className?: string;
	backgroundColor?: string;
	allowSelect?: boolean;
	allowMulti?: boolean;
	onChange?: (selectedImages: string[]) => void;
}

export const ImageGrid: FunctionComponent<ImageGridPropsSchema> = ({
	images,
	value = [],
	width = 200,
	height = 200,
	fill = 'cover',
	className = '',
	backgroundColor = 'transparent',
	allowSelect = false,
	allowMulti = false,
	onChange = noop,
}) => {
	const handleImageClick = (imgSource: string) => {
		if (allowMulti) {
			if (value.includes(imgSource)) {
				const index = value.indexOf(imgSource);
				value.splice(index, 1);
				onChange([...value]);
			} else {
				onChange([...value, imgSource]);
			}
		} else {
			onChange([imgSource]);
		}
	};

	return (
		<div
			className={clsx('c-image-grid', className, {
				'c-image-grid-selectable': allowSelect,
			})}
		>
			{images.map((imgSource) => (
				// biome-ignore lint/a11y/noStaticElementInteractions: TODO fix
				<div
					key={imgSource}
					className={clsx('c-image-grid__item', {
						'c-image-grid__item-selected': value.includes(imgSource),
					})}
					style={{
						backgroundColor,
						width: `${width}px`,
						height: `${height}px`,
						backgroundImage: `url(${imgSource})`,
						backgroundSize: fill,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
					}}
					onClick={() => handleImageClick(imgSource)}
					onKeyUp={handleEnterOrSpace(() => handleImageClick(imgSource))}
				/>
			))}
		</div>
	);
};
