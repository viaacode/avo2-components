import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { CTA, CTAProps } from '../../components';
import { ButtonAction, DefaultProps } from '../../types';

export interface BlockCTAsProps extends DefaultProps {
	elements: CTAProps[];
	width?: string;
	navigate: (buttonAction: ButtonAction) => void;
}

export const BlockCTAs: FunctionComponent<BlockCTAsProps> = ({
	className,
	elements,
	width,
	navigate,
}) => (
	<div className={classnames(className, 'c-cta')}>
		{elements.map((cta, index) => (
			<CTA
				key={`cta-${index}`}
				{...cta}
				navigate={navigate}
				width={width || (elements.length === 1 ? '100%' : '50%')}
			/>
		))}
	</div>
);
