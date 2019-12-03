import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps, EnglishContentType } from '../../types';

import './MetaData.scss';

export interface MetaDataProps extends DefaultProps {
	children: ReactNode;
	category: EnglishContentType;
	spaced?: boolean;
}

export const MetaData: FunctionComponent<MetaDataProps> = ({
	children,
	className,
	category,
	spaced,
}) => (
	<ul
		className={classNames(className, `c-meta-data c-meta-data--${category}`, {
			'c-meta-data--spaced-out': spaced,
		})}
	>
		{children}
	</ul>
);
