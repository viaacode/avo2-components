import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import type { DefaultProps } from '../../types/index.js';

import './Image.scss';

export interface ImagePropsSchema extends DefaultProps {
	children?: React.ReactNode;
	src: string;
	alt?: string;
	wide?: boolean;
	width?: string;
	height?: string;
}

export const Image: FunctionComponent<ImagePropsSchema> = ({
	className,
	src,
	alt,
	wide,
	width,
	height,
}) => (
	<div className={clsx(className, 'c-image', { 'c-image--full': wide })}>
		<img src={src} alt={alt} width={width} height={height} />
	</div>
);
