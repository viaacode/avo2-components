import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps, EnglishContentType } from '../../types';
import { Icon } from '../Icon/Icon';
import { CATEGORY_TO_ICON } from '../Thumbnail/Thumbnail';

export interface HeaderContentTypeProps extends DefaultProps {
	category: EnglishContentType;
	label: string;
}

export const HeaderContentType: FunctionComponent<HeaderContentTypeProps> = ({
	category,
	label,
	className,
}) => (
	<div className={classnames(className, 'c-content-type', `c-content-type--${category}`)}>
		<Icon name={CATEGORY_TO_ICON[category]} />
		<p>{label.toUpperCase()}</p>
	</div>
);
