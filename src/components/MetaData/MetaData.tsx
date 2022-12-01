import { Avo } from '@viaa/avo2-types';
import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

import './MetaData.scss';

export interface MetaDataPropsSchema extends DefaultProps {
	children: ReactNode;
	category: Avo.ContentType.English;
	spaced?: boolean;
}

export const MetaData: FunctionComponent<MetaDataPropsSchema> = ({
	children,
	className,
	category,
	spaced,
}) => (
	<ul
		className={classnames(className, `c-meta-data c-meta-data--${category}`, {
			'c-meta-data--spaced-out': spaced,
		})}
	>
		{children}
	</ul>
);
