import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { HeadingType } from '../../types/index';
import { Heading } from '../Heading/Heading';
import { RichText } from '../RichText/RichText';

import './CTA.scss';

export interface CTAProps extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	content: string | string[];
}

export const CTA: FunctionComponent<CTAProps> = ({
	className,
	headingType = 'h3',
	heading,
	content,
}) => (
	<div className={classnames(className, 'c-cta-item')}>
		<div className="c-cta__content">
			<div className="c-content">
				<Heading type={headingType}>{heading}</Heading>
				<RichText content={content} />
				{/* TODO: Add buttons content block */}
			</div>
		</div>
	</div>
);
