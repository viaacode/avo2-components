import React, { FunctionComponent } from 'react';

import { Button } from '../../Button/Button';
import { Container } from '../../Container/Container';
import { Column } from '../../Grid/Column';
import { Grid } from '../../Grid/Grid';
import { Spacer } from '../../Spacer/Spacer';

export interface BlockVideoTitleTextButtonProps {
	videoIframeSource: string;
	title?: string;
	text?: string;
	buttonLabel?: string;
	onClick?: () => void;
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
							{/* tslint:disable */}
							<iframe
								src={videoIframeSource}
								width="640"
								height="360"
								frameBorder="0"
								allowFullScreen={true}
							/>
							{/* tslint:enable */}
						</div>
					</Column>
					<Column size="6">
						<div className="c-content">
							{title && <h2>{title}</h2>}
							{text && <p>{text}</p>}
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
			</Spacer>
		</Container>
	);
};
