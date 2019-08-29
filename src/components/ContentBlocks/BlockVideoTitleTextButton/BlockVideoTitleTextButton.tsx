import React, { FunctionComponent } from 'react';

import marked from 'marked';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';
import { ExpandableContainer } from '../../ExpandableContainer/ExpandableContainer';
import { Column } from '../../Grid/Column';
import { Grid } from '../../Grid/Grid';
import { Spacer } from '../../Spacer/Spacer';

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
						{/* 16 by 9 => 100% by 56% */}
						<div className="c-video-wrapper" style={{ paddingBottom: '56%' }}>
							{/* TODO replace this with the flowplayer video component */}
							<video src={videoSource} controls />
						</div>
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
								{text && <p dangerouslySetInnerHTML={{ __html: marked(text) }} />}
							</ExpandableContainer>
						</div>
					</Column>
				</Grid>
			</Spacer>
		</Container>
	);
};
