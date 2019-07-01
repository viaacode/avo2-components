import React, { FunctionComponent } from 'react';

import { Image } from '../../Image/Image';

export interface BlockImageProps {
	imageSource: string;
	imageDescription?: string;
	width?: 'full-width';
}

export const BlockImage: FunctionComponent<BlockImageProps> = ({
	imageSource,
	imageDescription = '',
	width = 'full-width',
}: BlockImageProps) => {
	return (
		<div className="c-block-vertical">
			<Image src={imageSource} alt={imageDescription} wide={!!width} />
		</div>
	);
};
