import React, { FunctionComponent, MouseEvent } from 'react';

import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface TagListProps {
	tags: { label: string; id: string | number }[];
	swatches?: boolean;
	bordered?: boolean;
	closable?: boolean;
	onTagClosed?: (tagId: string | number, clickEvent: MouseEvent) => void;
	onTagClicked?: (tagId: string | number, clickEvent: MouseEvent) => void;
}

export const TagList: FunctionComponent<TagListProps> = ({
	tags,
	swatches = true,
	bordered = true,
	closable = false,
	onTagClosed = () => {},
	onTagClicked,
}: TagListProps) =>
	!!tags && !!tags.length ? (
		<ul className="c-tag-list">
			{tags.map((tag: { label: string; id: string | number }, index) => (
				<li className={classNames({ 'c-tag': bordered, 'c-label': !bordered })} key={tag.id}>
					{swatches && (
						<div
							className={classNames('c-label-swatch', `c-label-swatch--color-${(index % 10) + 1}`)}
							onClick={(evt: MouseEvent) => (onTagClicked || (() => {}))(tag.id, evt)}
							style={onTagClicked ? { cursor: 'pointer' } : {}}
						/>
					)}
					{swatches || closable ? (
						<p
							className={classNames({ 'c-tag__label': !swatches, 'c-label-text': swatches })}
							onClick={(evt: MouseEvent) => (onTagClicked || (() => {}))(tag.id, evt)}
							style={onTagClicked ? { cursor: 'pointer' } : {}}
						>
							{tag.label}
						</p>
					) : (
						<span
							onClick={(evt: MouseEvent) => (onTagClicked || (() => {}))(tag.id, evt)}
							style={onTagClicked ? { cursor: 'pointer' } : {}}
						>
							{tag.label}
						</span>
					)}
					{closable && (
						<a onClick={(evt: MouseEvent) => onTagClosed(tag.id, evt)}>
							<Icon name="close" />
						</a>
					)}
				</li>
			))}
		</ul>
	) : null;
