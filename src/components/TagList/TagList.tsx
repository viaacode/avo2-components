import clsx from 'clsx';
import { noop } from 'lodash-es';
import React, { FunctionComponent, MouseEvent } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import styles from './TagList.module.scss';

export interface TagOptionSchema {
	label: string;
	id: string | number;
	color?: string;
	active?: boolean;
	icon?: IconNameSchema;
	className?: string;
}

export interface TagListPropsSchema extends DefaultProps {
	tags: TagOptionSchema[];
	swatches?: boolean;
	bordered?: boolean;
	closable?: boolean;
	selectable?: boolean;
	onTagClosed?: (tagId: string | number, clickEvent: MouseEvent) => void;
	onTagClicked?: (tagId: string | number, clickEvent: MouseEvent) => void;
}

export const TagList: FunctionComponent<TagListPropsSchema> = ({
	className,
	tags,
	swatches = true,
	bordered = true,
	closable = false,
	selectable = false,
	onTagClosed = noop,
	onTagClicked,
}) => {
	const safeOnTagClicked = onTagClicked || noop;

	return !!tags && !!tags.length ? (
		<ul className={clsx(className, 'c-tag-list', styles['c-tag-list'])}>
			{tags.map((tag: TagOptionSchema, index) => (
				<li
					className={clsx(tag.className, {
						'c-label': !bordered,

						// Normal
						['c-tag']: bordered,
						['c-tag__active']: selectable && tag.active,

						// Module
						[styles['c-tag']]: bordered,
						[styles['c-tag__active']]: selectable && tag.active,
					})}
					key={tag.id}
				>
					{/* output swatch element */}
					{swatches && (
						<div
							className={clsx('c-label-swatch', {
								// Normal
								[`c-label-swatch--color-${(index % 10) + 1}`]: !tag.color,

								// Module
								[styles[`c-label-swatch--color-${(index % 10) + 1}`]]: !tag.color,
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
							className={clsx({
								'c-label-text': swatches,

								// Normal
								['c-tag__label']: !swatches,

								// Module
								[styles['c-tag__label']]: !swatches,
							})}
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
							{tag.icon && <Icon name={tag.icon} />}
							{tag.label}
						</span>
					)}
					{/* output close button element */}
					{closable && (
						<a onClick={(evt: MouseEvent) => onTagClosed(tag.id, evt)}>
							<Icon name={IconNameSchema.close} />
						</a>
					)}
				</li>
			))}
		</ul>
	) : null;
};
