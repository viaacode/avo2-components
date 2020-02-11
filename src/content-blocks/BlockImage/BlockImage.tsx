import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { Container } from '../../components/Container/Container';
import { Image } from '../../components/Image/Image';
import { DefaultProps } from '../../types';

import './BlockImage.scss';

export interface BlockImageProps extends DefaultProps {
	imageSource: string;
	imageDescription?: string;
	title?: string;
	text?: string;
	width?: 'full-width' | '500px' | '400px';
}

export const BlockImage: FunctionComponent<BlockImageProps> = ({
	className,
	imageSource,
	imageDescription = '',
	title = '',
	text = '',
	width = 'full-width',
}) => {
	return (
		<Container
			className={classnames(
				className,
				'o-container-vertical-image',
				`o-image-block-width-${width}`
			)}
			mode="vertical"
		>
			<Image src={imageSource} alt={imageDescription || title || text} wide />
			{title && <h3>{title}</h3>}
			{text && <p className="a-block-image-text">{text}</p>}
		</Container>
	);
};
