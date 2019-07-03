import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

export interface ImageProps {
	src: string;
	alt?: string;
	wide?: boolean;
	width?: string;
	height?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
	src,
	alt,
	wide,
	width,
	height,
}: ImageProps) => (
	<div className={classNames('c-image', { 'c-image--full': wide })}>
		<img src={src} alt={alt} width={width} height={height} />
	</div>
);
