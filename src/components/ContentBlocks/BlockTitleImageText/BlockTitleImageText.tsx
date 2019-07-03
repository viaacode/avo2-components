import React, { FunctionComponent } from 'react';

import marked from 'marked';

import { Container } from '../../Container/Container';
import { Image } from '../../Image/Image';
import { Spacer } from '../../Spacer/Spacer';

export interface BlockTitleImageTextProps {
	title?: string;
	imageSource?: string;
	imageDescription?: string;
	text?: string;
}

export const BlockTitleImageText: FunctionComponent<BlockTitleImageTextProps> = ({
	title,
	imageSource,
	imageDescription = '',
	text,
}: BlockTitleImageTextProps) => {
	return (
		<Spacer margin="top-large">
			<Container size="small">
				{title && <h2 className="c-h2">{title}</h2>}
				{imageSource && <Image src={imageSource} alt={imageDescription} wide={true} />}
				{text && (
					<Spacer margin="top">
						<p dangerouslySetInnerHTML={{ __html: marked(text) }} />
					</Spacer>
				)}
			</Container>
		</Spacer>
	);
};
