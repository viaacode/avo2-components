import React, { FunctionComponent } from 'react';

import { ImageGrid } from '../../components/ImageGrid/ImageGrid';
import { DefaultProps } from '../../types';

export interface BlockImageGridProps extends DefaultProps {
	images: string[];
	width?: number;
	height?: number;
	fill?: 'cover' | 'contain';
	className?: string;
}

export const BlockImageGrid: FunctionComponent<BlockImageGridProps> = ({
	images = [],
	width,
	height,
	fill,
	className,
}) => {
	return (
		<ImageGrid
			images={images}
			allowMulti={false}
			allowSelect={false}
			className={className}
			fill={fill}
			width={width}
			height={height}
		/>
	);
};
