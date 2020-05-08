import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';
import { AvatarIcon } from '../Avatar/AvatarIcon/AvatarIcon';
import { Container } from '../Container/Container';

import './Quote.scss';

export interface QuotePropsSchema extends DefaultProps {
	quote: string;
	authorImage?: string;
	authorName: string;
	authorInitials?: string;
}

export const Quote: FunctionComponent<QuotePropsSchema> = ({
	className,
	quote,
	authorImage,
	authorName,
	authorInitials,
}) => (
	<Container className={classnames(className, 'o-container-vertical-quote')} mode="vertical">
		<div className="c-quote">
			<blockquote className="c-quote__text">{quote}</blockquote>
			{authorName && (
				<cite className="c-quote__author">
					<AvatarIcon initials={authorInitials} image={authorImage} />
					<span>{authorName}</span>
				</cite>
			)}
		</div>
	</Container>
);
