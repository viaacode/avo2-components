import React, { FunctionComponent } from 'react';

import { convertToHtml } from '../../../helpers/convertToHtml';
import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';
import { ExpandableContainer } from '../../ExpandableContainer/ExpandableContainer';
import { Column } from '../../Grid/Column/Column';
import { Grid } from '../../Grid/Grid';
import { Spacer } from '../../Spacer/Spacer';
import { VideoWrapper } from '../../VideoWrapper/VideoWrapper';

export interface BlockVideoTitleTextButtonProps extends DefaultProps {
	videoSource: string;
	title?: string;
	titleLink?: string;
	text?: string;
	collapsedHeight?: number;
}

export const BlockVideoTitleTextButton: FunctionComponent<BlockVideoTitleTextButtonProps> = ({
	className,
	videoSource,
	title,
	titleLink,
	text = '',
	collapsedHeight = 220,
}) => {
	return (
		<Container className={className} mode="horizontal">
			<Spacer>
				<Grid>
					<Column size="2-6">
						<VideoWrapper aspect="16:9">
							{/* TODO replace this with the flowplayer video component */}
							<video src={videoSource} controls />
						</VideoWrapper>
					</Column>
					<Column size="2-6">
						<div className="c-content">
							<ExpandableContainer collapsedHeight={collapsedHeight}>
								{title && (
									<h2>
										<a href={titleLink} style={{ color: 'black', textDecoration: 'none' }}>
											{title}
										</a>
									</h2>
								)}
								{text && <p dangerouslySetInnerHTML={{ __html: convertToHtml(text) }} />}
							</ExpandableContainer>
						</div>
					</Column>
				</Grid>
			</Spacer>
		</Container>
	);
};
