import React, { FunctionComponent } from 'react';

export interface BlockQuoteProps {
	quoteText: string;
	authorAvatarSource?: string;
	authorName: string;
}

export const BlockQuote: FunctionComponent<BlockQuoteProps> = ({
	quoteText,
	authorAvatarSource,
	authorName,
}: BlockQuoteProps) => {
	return (
		<div className="o-container-vertical o-container-vertical-quote">
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
		</div>
	);
};
