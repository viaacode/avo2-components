import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { CTA, CTAProps } from '../../components';

import { DefaultProps } from '../../types';

export interface BlockCTAsProps extends DefaultProps {
	elements: CTAProps[];
	width?: string;
}

export const BlockCTAs: FunctionComponent<BlockCTAsProps> = ({ className, elements, width }) => (
	<div className={classnames(className, 'c-cta')}>
		{elements.map((cta, index) => (
			<CTA
				key={`cta-${index}`}
				{...cta}
				width={width || (elements.length === 1 ? '100%' : '50%')}
			/>
		))}
	</div>
);
