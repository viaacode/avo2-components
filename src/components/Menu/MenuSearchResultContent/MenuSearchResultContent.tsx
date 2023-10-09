import { type Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { noop } from '../../../helpers/noop';
import { DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { CATEGORY_TO_ICON } from '../../Thumbnail/Thumbnail';
import { MenuContent } from '../MenuContent/MenuContent';

export interface MenuSearchResultItemInfoSchema {
	label: string;
	id: string | number;
	type: Avo.ContentType.English;
}

export interface MenuSearchResultContentPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	menuItems: MenuSearchResultItemInfoSchema[];
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const CONTENT_TYPE_TO_LABEL: { [contentType in Avo.ContentType.English]?: string } = {
	/* eslint-enable @typescript-eslint/no-unused-vars */
	collection: 'Collectie',
	video: 'Video',
	audio: 'Audio',
	bundle: 'Bundel',
	search: 'Zoekopdracht',
};

export const MenuSearchResultContent: FunctionComponent<MenuSearchResultContentPropsSchema> = ({
	className,
	menuItems,
	noResultsLabel,
	onClick = noop,
}) => {
	const renderMenuItem = (menuItemInfo: MenuSearchResultItemInfoSchema) => {
		return (
			<div
				className={clsx(className, 'c-menu__item')}
				onClick={() => onClick(menuItemInfo.id)}
				key={`menu-search-item-${menuItemInfo.id}`}
			>
				<div className={'c-menu__label'}>
					<div className={`c-content-type c-content-type--${menuItemInfo.type}`}>
						<Icon name={CATEGORY_TO_ICON[menuItemInfo.type]} />
						{menuItemInfo.label}
					</div>
				</div>
				<div className="c-content-type">
					<p>{CONTENT_TYPE_TO_LABEL[menuItemInfo.type]}</p>
				</div>
			</div>
		);
	};

	return (
		<MenuContent
			menuItems={menuItems}
			onClick={onClick}
			renderItem={renderMenuItem as any}
			noResultsLabel={noResultsLabel}
		/>
	);
};
