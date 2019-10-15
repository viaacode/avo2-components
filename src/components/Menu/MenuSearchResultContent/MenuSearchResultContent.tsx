import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { ContentType, DefaultProps } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { IconName } from '../../Icon/types';
import { MenuContent } from '../MenuContent/MenuContent';

export interface MenuSearchResultItemInfo {
	label: string;
	id: string | number;
	type: ContentType;
}

export interface MenuContentProps extends DefaultProps {
	menuItems: MenuSearchResultItemInfo[];
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

export const CONTENT_TYPE_TO_ICON_NAME: { [contentType in ContentType]: IconName } = {
	collection: 'collection',
	video: 'video',
	audio: 'volume-1',
	bundle: 'folder',
	search: 'search',
};

export const CONTENT_TYPE_TO_LABEL: { [contentType in ContentType]: string } = {
	collection: 'Collectie',
	video: 'Video',
	audio: 'Audio',
	bundle: 'Bundel',
	search: 'Zoekopdracht',
};

export const MenuSearchResultContent: FunctionComponent<MenuContentProps> = ({
	className,
	menuItems,
	noResultsLabel,
	onClick = () => {},
}) => {
	const renderMenuItem = (menuItemInfo: MenuSearchResultItemInfo) => {
		return (
			<div
				className={classNames(className, 'c-menu__item')}
				onClick={() => onClick(menuItemInfo.id)}
				key={`menu-search-item-${menuItemInfo.id}`}
			>
				<div className="c-menu__label">
					<div className={`c-content-type c-content-type--${menuItemInfo.type}`}>
						<Icon name={CONTENT_TYPE_TO_ICON_NAME[menuItemInfo.type]} />
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
