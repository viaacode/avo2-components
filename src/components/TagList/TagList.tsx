import React, { FunctionComponent, MouseEvent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

export interface TagOption {
	label: string;
	id: string | number;
	color?: string;
}

export interface TagListProps extends DefaultProps {
	tags: TagOption[];
	swatches?: boolean;
	bordered?: boolean;
	closable?: boolean;
	onTagClosed?: (tagId: string | number, clickEvent: MouseEvent) => void;
	onTagClicked?: (tagId: string | number, clickEvent: MouseEvent) => void;
}

export const TagList: FunctionComponent<TagListProps> = ({
	className,
	tags,
	swatches = true,
	bordered = true,
	closable = false,
	onTagClosed = () => {},
	onTagClicked,
}) => {
	const safeOnTagClicked = onTagClicked || (() => {});

	return !!tags && !!tags.length ? (
		<ul className={classNames(className, 'c-tag-list')}>
			{tags.map((tag: TagOption, index) => (
				<li className={classNames({ 'c-tag': bordered, 'c-label': !bordered })} key={tag.id}>
					{/* output swatch element */}
					{swatches && (
						<div
							className={classNames('c-label-swatch', {
								[`c-label-swatch--color-${(index % 10) + 1}`]: !tag.color,
							})}
							onClick={(evt: MouseEvent) => safeOnTagClicked(tag.id, evt)}
							style={{
								...(onTagClicked ? { cursor: 'pointer' } : {}),
								...(tag.color ? { backgroundColor: tag.color } : {}),
							}}
						/>
					)}
					{/* output label text element */}
					{swatches || closable ? (
						<p
							className={classNames({ 'c-tag__label': !swatches, 'c-label-text': swatches })}
							onClick={(evt: MouseEvent) => safeOnTagClicked(tag.id, evt)}
							style={onTagClicked ? { cursor: 'pointer' } : {}}
						>
							{tag.label}
						</p>
					) : (
						<span
							onClick={(evt: MouseEvent) => safeOnTagClicked(tag.id, evt)}
							style={onTagClicked ? { cursor: 'pointer' } : {}}
						>
							{tag.label}
						</span>
					)}
					{/* output close button element */}
					{closable && (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a onClick={(evt: MouseEvent) => onTagClosed(tag.id, evt)}>
							<Icon name="close" />
						</a>
					)}
				</li>
			))}
		</ul>
	) : null;
};
