import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { HeadingType } from '../../types/index';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { IconName } from '../Icon/types';
import { RichText } from '../RichText/RichText';

import './CTA.scss';

export interface CTAProps extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	content: string | string[];
	buttonLabel: string;
	buttonIcon?: IconName;
}

// TODO: Add button action
export const CTA: FunctionComponent<CTAProps> = ({
	className,
	headingType = 'h3',
	heading,
	content,
	buttonLabel,
}) => (
	<div className={classnames(className, 'c-cta-item')}>
		<div className="c-cta__content">
			<div className="c-content">
				<Heading type={headingType}>{heading}</Heading>
				<RichText content={content} />
				<Button type="secondary" label={buttonLabel} />
			</div>
		</div>
	</div>
);
