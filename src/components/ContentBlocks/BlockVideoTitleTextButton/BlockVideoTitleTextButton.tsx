import React, { FunctionComponent } from 'react';

import { Button } from '../../Button/Button';
import { Container } from '../../Container/Container';
import { Column } from '../../Grid/Column';
import { Grid } from '../../Grid/Grid';
import { Spacer } from '../../Spacer/Spacer';

export interface BlockVideoTitleTextButtonProps {
	videoSource: string;
	title?: string;
	text?: string;
	buttonLabel?: string;
	onClick?: () => void;
}

export const BlockVideoTitleTextButton: FunctionComponent<BlockVideoTitleTextButtonProps> = ({
	videoSource,
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
						{/* 16 by 9 => 100% by 56% */}
						<div className="c-video-wrapper" style={{ paddingBottom: '56%' }}>
							{/* TODO replace this with the flowplayer video component */}
							<video src={videoSource} />
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
