import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface TagListProps {
	tags: string[];
	swatches?: boolean;
	bordered?: boolean;
	closable?: boolean;
	onTagClosed?: (tag: string) => void;
	onTagClicked?: (tag: string) => void;
}

export const TagList: FunctionComponent<TagListProps> = ({
	tags,
	swatches = true,
	bordered = true,
	closable = false,
	onTagClosed = () => {},
	onTagClicked = () => {},
}: TagListProps) =>
	tags && tags.length ? (
		<ul className="c-tag-list">
			{tags.map((tag, index) => (
				<li className={classNames({ 'c-tag': bordered, 'c-label': !bordered })} key={tag}>
					{swatches && (
						<div
							className={classNames('c-label-swatch', `c-label-swatch--color-${(index % 10) + 1}`)}
							onClick={() => onTagClicked(tag)}
						/>
					)}
					{swatches || closable ? (
						<p
							className={classNames({ 'c-tag__label': !swatches, 'c-label-text': swatches })}
							onClick={() => onTagClicked(tag)}
						>
							{tag}
						</p>
					) : (
						tag
					)}
					{closable && (
						<a onClick={() => onTagClosed(tag)}>
							<Icon name="close" />
						</a>
					)}
				</li>
			))}
		</ul>
	) : null;
