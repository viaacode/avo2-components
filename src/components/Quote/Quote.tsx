import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import type { DefaultProps } from '../../types';
import { AvatarIcon } from '../Avatar/AvatarIcon/AvatarIcon';

import './Quote.scss';

export interface QuotePropsSchema extends DefaultProps {
	children?: React.ReactNode;
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
	<div className={clsx('c-quote', className)}>
		<blockquote className="c-quote__text">{quote}</blockquote>
		{authorName && (
			<cite className="c-quote__author">
				<AvatarIcon initials={authorInitials} image={authorImage} />
				<span>{authorName}</span>
			</cite>
		)}
	</div>
);
