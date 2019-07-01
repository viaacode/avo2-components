import React, { ChangeEvent, FunctionComponent } from 'react';
import { Spacer } from '../../Spacer/Spacer';
import { Container } from '../../Container/Container';
import { Image } from '../../Image/Image';

export interface BlockQuoteProps {
	title?: string,
	imageSource?: string,
	imageDescription?: string,
	text?: string,
}

export const BlockTitleImageText: FunctionComponent<BlockQuoteProps> = ({
	title,
	imageSource,
	imageDescription = '',
	text,
}: BlockQuoteProps) => {
	return (
		<Spacer margin="top-large">
			<Container size="small">
				{title && <h2 className="c-h2">{title}</h2>}
				{imageSource && <Image src={imageSource} alt={imageDescription} />}
				{text && <Spacer margin="top">
					<p>{text}</p>
				</Spacer>}
			</Container>
		</Spacer>
	);
};
