import React, { FunctionComponent } from 'react';

import { ButtonAction, DefaultProps } from '../../types';
import { BlockHeading } from '../BlockHeading/BlockHeading';
import {
	ButtonToolbar,
	FlowPlayer,
	Spacer,
	Container,
	Button,
	ButtonProps,
} from '../../components';

import './BlockHero.scss';

export interface BlockHeroProps extends DefaultProps {
	title: string;
	titleColor?: string;
	content: string;
	contentColor?: string;
	src?: string;
	poster?: string;
	altText?: string;
	buttons?: (ButtonProps & { buttonAction: ButtonAction })[];
	navigate?: (buttonAction: ButtonAction) => void;
}

export const BlockHero: FunctionComponent<BlockHeroProps> = ({
	title,
	titleColor,
	content,
	contentColor,
	src,
	poster,
	altText,
	buttons = [],
	navigate,
}) => (
	<Container mode="vertical" size="large">
		<div className="c-tri__half-split" />
		<div className="c-tri__tr" />
		<div className="c-tri__bl" />
		<Container mode="horizontal">
			<div className="c-home-hero">
				<div className="c-home-hero__content">
					<BlockHeading type="h2" color={titleColor} className="c-home-hero__title">
						{title}
					</BlockHeading>
					<div className="c-content c-content--inverse">
						<p className="c-body-1--spaced" style={{ color: contentColor }}>
							{content}
						</p>
					</div>
					{!!buttons && navigate && (
						<Spacer margin="top-large">
							<ButtonToolbar>
								{buttons.map(({ buttonAction, ...rest }, index: number) => {
									return (
										<Button
											{...rest}
											key={`hero-button-${index}`}
											onClick={() => navigate(buttonAction)}
										/>
									);
								})}
							</ButtonToolbar>
						</Spacer>
					)}
				</div>
				<div className="c-home-hero__image">
					{!!src && <FlowPlayer src={src} poster={poster} title={altText || 'Hero video'} />}
					{!src && poster && <img src={poster} alt={altText || 'Hero afbeelding'} />}
				</div>
			</div>
		</Container>
	</Container>
);