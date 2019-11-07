import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { ContentType, DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/types';

interface ContentTypeProps extends DefaultProps {
	category: ContentType;
	label: string;
}

export const HeaderContentType: FunctionComponent<ContentTypeProps> = ({
	category,
	label,
	className,
}) => (
	<div className={classNames(className, 'c-content-type', `c-content-type--${category}`)}>
		<Icon name={category as IconName} />
		<p>{label.toUpperCase()}</p>
	</div>
);
