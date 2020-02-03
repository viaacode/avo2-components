import React, { FunctionComponent } from 'react';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Column } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { Image } from '../../components/Image/Image';
import { Spacer } from '../../components/Spacer/Spacer';
import { convertToHtml } from '../../helpers';
import { DefaultProps } from '../../types';

export interface BlockImageTitleTextButtonProps extends DefaultProps {
	imageSource: string;
	imageDescription?: string;
	title?: string;
	text?: string;
	buttonLabel?: string;
	onClick?: () => void;
}

export const BlockImageTitleTextButton: FunctionComponent<BlockImageTitleTextButtonProps> = ({
	className,
	imageSource,
	imageDescription,
	title,
	text = '',
	buttonLabel,
	onClick,
}) => {
	return (
		<Container className={className} mode="vertical">
			<Container mode="horizontal">
				<Grid>
					<Column size="2-4">
						<Image src={imageSource} alt={imageDescription} />
					</Column>
					<Column size="2-8">
						<div className="c-content">
							{title && <h2>{title}</h2>}
							{text && <p dangerouslySetInnerHTML={{ __html: convertToHtml(text) }} />}
							{buttonLabel && (
								<Spacer margin="top">
									<Button
										label={buttonLabel}
										type="secondary"
										onClick={() => onClick && onClick()}
									/>
								</Spacer>
							)}
						</div>
					</Column>
				</Grid>
			</Container>
		</Container>
	);
};
