import { Avo } from '@viaa/avo2-types';
import classnames from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { CATEGORY_TO_ICON } from '../Thumbnail/Thumbnail';

export interface HeaderContentTypePropsSchema extends DefaultProps {
	category: Avo.ContentType.English;
	label: string;
}

export const HeaderContentType: FunctionComponent<HeaderContentTypePropsSchema> = ({
	category,
	label,
	className,
}) => (
	<div className={classnames(className, 'c-content-type', `c-content-type--${category}`)}>
		<Icon name={CATEGORY_TO_ICON[category]} />
		<p>{label.toUpperCase()}</p>
	</div>
);
