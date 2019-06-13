import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

export interface ImageProps {
	src: string;
	alt?: string;
	wide?: boolean;
}

export const Image: FunctionComponent<ImageProps> = ({ src, alt, wide }: ImageProps) => (
	<div className={classnames({ 'c-image': !wide, 'c-image--full-width': wide })}>
		<img src={src} alt={alt} />
	</div>
);
