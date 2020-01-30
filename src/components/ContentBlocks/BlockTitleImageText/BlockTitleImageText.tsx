import React, { FunctionComponent } from 'react';

import { convertToHtml } from '../../../helpers';
import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';
import { Image } from '../../Image/Image';
import { Spacer } from '../../Spacer/Spacer';

export interface BlockTitleImageTextProps extends DefaultProps {
	title?: string;
	imageSource?: string;
	imageDescription?: string;
	text?: string;
}

export const BlockTitleImageText: FunctionComponent<BlockTitleImageTextProps> = ({
	className,
	title,
	imageSource,
	imageDescription = '',
	text = '',
}) => {
	return (
		<Spacer className={className} margin="top-large">
			<Container size="small">
				{title && <h2 className="c-h2">{title}</h2>}
				{imageSource && <Image src={imageSource} alt={imageDescription} wide={true} />}
				{text && (
					<Spacer margin="top">
						<p dangerouslySetInnerHTML={{ __html: convertToHtml(text) }} />
					</Spacer>
				)}
			</Container>
		</Spacer>
	);
};
