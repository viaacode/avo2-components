import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { ContentType } from '../../types';
import { Icon } from '../Icon/Icon';
import { MenuContent } from '../Menu/MenuContent';

export interface MenuSearchResultItemInfo {
	label: string;
	id: string | number;
	type: ContentType;
}

export interface MenuContentProps {
	menuItems: MenuSearchResultItemInfo[];
	noResultsLabel?: string;
	onClick?: (menuItemId: string | number) => void;
}

export const CONTENT_TYPE_TO_ICON_NAME: { [contentType in ContentType]: string } = {
	collection: 'collection',
	video: 'video',
	audio: 'volume-1',
	bundle: 'folder',
};

export const CONTENT_TYPE_TO_LABEL: { [contentType in ContentType]: string } = {
	collection: 'Collectie',
	video: 'Video',
	audio: 'Audio',
	bundle: 'Bundle',
};

export const MenuSearchResultContent: FunctionComponent<MenuContentProps> = ({
	menuItems,
	noResultsLabel,
	onClick = () => {},
}) => {
	const renderMenuItem = (menuItemInfo: MenuSearchResultItemInfo) => {
		return (
			<div
				className="c-menu__item"
				onClick={() => (onClick || (() => {}))(menuItemInfo.id)}
				key={`menu-search-item-${menuItemInfo.id}`}
				style={onClick ? { cursor: 'pointer' } : {}}
			>
				<div
					className="c-menu__label"
					style={{
						maxWidth: 'calc(100% - 80px)',
					}}
				>
					<div
						className={classNames('c-content-type', `c-content-type--${menuItemInfo.type}`)}
						style={{
							whiteSpace: 'nowrap',
							textOverflow: 'ellipsis',
							display: 'block',
							overflow: 'hidden',
						}}
					>
						<div className={`o-svg-icon-${menuItemInfo.type}`} style={{ display: 'inline-block' }}>
							<Icon name={CONTENT_TYPE_TO_ICON_NAME[menuItemInfo.type]} />
						</div>
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
