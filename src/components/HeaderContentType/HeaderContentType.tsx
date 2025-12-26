import type { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';
import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';
import type { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { CATEGORY_TO_ICON } from '../Thumbnail/Thumbnail';

export interface HeaderContentTypePropsSchema extends DefaultProps {
	children?: React.ReactNode;
	category: AvoContentTypeEnglish;
	label: string;
}

export const HeaderContentType: FunctionComponent<HeaderContentTypePropsSchema> = ({
	category,
	label,
	className,
}) => (
	<div className={clsx(className, 'c-content-type', `c-content-type--${category}`)}>
		<Icon name={CATEGORY_TO_ICON[category]} />
		<p>{label.toUpperCase()}</p>
	</div>
);
