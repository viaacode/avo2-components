import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps, EnglishContentType } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/types';

interface ContentTypeProps extends DefaultProps {
	category: EnglishContentType;
	label: string;
}

export const HeaderContentType: FunctionComponent<ContentTypeProps> = ({
	category,
	label,
	className,
}) => (
	<div className={classnames(className, 'c-content-type', `c-content-type--${category}`)}>
		<Icon name={category as IconName} />
		<p>{label.toUpperCase()}</p>
	</div>
);
