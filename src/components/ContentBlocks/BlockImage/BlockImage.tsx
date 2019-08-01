import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';
import { Image } from '../../Image/Image';

export interface BlockImageProps extends DefaultProps {
	imageSource: string;
	imageDescription?: string;
	width?: 'full-width';
}

export const BlockImage: FunctionComponent<BlockImageProps> = ({
	className,
	imageSource,
	imageDescription = '',
	width = 'full-width',
}: BlockImageProps) => {
	return (
		<div className={classnames(className, 'c-block-vertical')}>
			<Image src={imageSource} alt={imageDescription} wide={!!width} />
		</div>
	);
};
