import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';
import { Image } from '../../Image/Image';

import './BlockImage.scss';

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
}) => {
	return (
		<Container className={classnames(className, 'o-container-vertical-image')} mode="vertical">
			<Image src={imageSource} alt={imageDescription} wide={!!width} />
		</Container>
	);
};
