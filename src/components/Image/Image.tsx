import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './Image.scss';

export interface ImageProps extends DefaultProps {
	src: string;
	alt?: string;
	wide?: boolean;
	width?: string;
	height?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
	className,
	src,
	alt,
	wide,
	width,
	height,
}) => (
	<div className={classnames(className, 'c-image', { 'c-image--full': wide })}>
		<img src={src} alt={alt} width={width} height={height} />
	</div>
);
