import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { CTA, CTAProps } from '../../components/CTA/CTA';

import { DefaultProps } from '../../types';

export interface BlockCTAsProps extends DefaultProps {
	elements: CTAProps[];
}

export const BlockCTAs: FunctionComponent<BlockCTAsProps> = ({ className, elements }) => (
	<div className={classnames(className, 'c-cta')}>
		{elements.map((cta, index) => (
			<CTA key={`cta-${index}`} {...cta} />
		))}
	</div>
);
