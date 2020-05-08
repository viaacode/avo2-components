import classnames from 'classnames';
import { get } from 'lodash-es';
import React, { FunctionComponent } from 'react';

import { ButtonAction, DefaultProps } from '../../types';

import './BlockSpotlight.scss';

export interface ImageInfo {
	image: string;
	title: string;
	buttonAction?: ButtonAction;
	className?: string;
}

export interface BlockSpotlightProps extends DefaultProps {
	elements: ImageInfo[];
	navigate: (buttonAction: ButtonAction) => void;
}

export const BlockSpotlight: FunctionComponent<BlockSpotlightProps> = ({
	elements,
	navigate = () => {},
	className,
}) => {
	function renderItem(index: number) {
		if (!elements[index]) {
			return null;
		}
		const buttonAction = get(elements, [index, 'buttonAction']);
		const navigateOnClick: Function = buttonAction ? () => navigate(buttonAction) : () => {};
		return (
			<div
				className={classnames('c-spotlight__item', {
					'u-clickable': !!buttonAction,
				})}
				style={{ backgroundImage: `url(${get(elements, [index, 'image'])})` }}
				onClick={() => navigateOnClick()}
			>
				<p>{get(elements, [index, 'title'])}</p>
			</div>
		);
	}

	return (
		<div className={classnames(className, 'c-spotlight')}>
			{renderItem(0)}
			{renderItem(1)}
			{renderItem(2)}
		</div>
	);
};
