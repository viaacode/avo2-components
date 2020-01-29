import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps, EnglishContentType } from '../../../types';
import { Icon } from '../../Icon/Icon';
import { CATEGORY_TO_ICON } from '../../Thumbnail/Thumbnail';
import { MenuContent } from '../MenuContent/MenuContent';

export interface MenuSearchResultItemInfo {
	label: string;
	id: string | number;
	type: EnglishContentType;
}

export interface MenuContentProps extends DefaultProps {
	menuItems: MenuSearchResultItemInfo[];
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

export const CONTENT_TYPE_TO_LABEL: { [contentType in EnglishContentType]?: string } = {
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
				className={classnames(className, 'c-menu__item')}
				onClick={() => onClick(menuItemInfo.id)}
				key={`menu-search-item-${menuItemInfo.id}`}
			>
				<div className="c-menu__label">
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
