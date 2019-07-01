import React, { ChangeEvent, FunctionComponent } from 'react';
import { Spacer } from '../../Spacer/Spacer';
import { Button } from '../../Button/Button';
import { Grid } from '../../Grid/Grid';
import { Column } from '../../Grid/Column';
import { Container } from '../../Container/Container';

export interface BlockVideoTitleTextButtonProps {
	videoIframeSource: string,
	title?: string,
	text?: string,
	buttonLabel?: string,
	onClick?: () => void,
}

export const BlockVideoTitleTextButton: FunctionComponent<BlockVideoTitleTextButtonProps> = ({
	videoIframeSource,
	title,
	text,
	buttonLabel,
	onClick,
}: BlockVideoTitleTextButtonProps) => {
	return (
			<Container mode="horizontal">
				<Spacer>
				<Grid>
					<Column size="6">
						<div className="c-video-wrapper">
							<iframe
								src={videoIframeSource}
								width="640" height="360" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen=""
								allowFullScreen=""></iframe>
						</div>
					</Column>
					<Column size="6">
						<div className="c-content">
							{title && <h2>{title}</h2>}
							{text && <p>{text}</p>}
							{buttonLabel && <Spacer margin="top">
								<Button label={buttonLabel} type="secondary" onClick={onClick && onClick()} />
							</Spacer>}
						</div>
					</Column>
				</Grid>
				</Spacer>
			</Container>
	);
};
