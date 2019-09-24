import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

export interface BlockQuoteProps extends DefaultProps {
	quoteText: string;
	authorAvatarSource?: string;
	authorName: string;
}

export const BlockQuote: FunctionComponent<BlockQuoteProps> = ({
	className,
	quoteText,
	authorAvatarSource,
	authorName,
}) => {
	return (
		<Container className={classnames(className, 'o-container-vertical-quote')} mode="vertical">
			<div className="c-quote">
				<blockquote className="c-quote__text">{quoteText}</blockquote>
				{authorName && (
					<cite className="c-quote__author">
						{authorAvatarSource && (
							<img
								className="c-quote__avatar"
								src={authorAvatarSource}
								alt="avatar of the author"
								style={{ marginRight: '10px' }}
							/>
						)}
						<span>{authorName}</span>
					</cite>
				)}
			</div>
		</Container>
	);
};
