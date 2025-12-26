import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../types';

import './MetaData.scss';
import type { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';

export interface MetaDataPropsSchema extends DefaultProps {
	children: ReactNode;
	category: AvoContentTypeEnglish;
	spaced?: boolean;
}

export const MetaData: FunctionComponent<MetaDataPropsSchema> = ({
	children,
	className,
	category,
	spaced,
}) => (
	<ul
		className={clsx(className, `c-meta-data c-meta-data--${category}`, {
			'c-meta-data--spaced-out': spaced,
		})}
	>
		{children}
	</ul>
);
