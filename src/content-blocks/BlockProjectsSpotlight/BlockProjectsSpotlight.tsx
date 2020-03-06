import { get } from 'lodash-es';
import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { ButtonAction, DefaultProps } from '../../types';

import './BlockProjectsSpotlight.scss';

export interface ImageInfo {
	image: string;
	title: string;
	buttonAction?: ButtonAction;
	className?: string;
	navigate: () => void;
}

export interface BlockProjectsSpotlightProps extends DefaultProps {
	elements: ImageInfo[];
}

export const BlockProjectsSpotlight: FunctionComponent<BlockProjectsSpotlightProps> = ({
	elements,
	className,
}) => {
	function renderProject(index: number) {
		if (!elements[index]) {
			return null;
		}
		return (
			<div
				className={classnames('c-projects-grid-item', {
					'u-clickable': !!get(elements, [index, 'buttonAction']),
				})}
				style={{ backgroundImage: `url(${get(elements, [index, 'image'])})` }}
				onClick={get(elements, [index, 'navigate'])}
			>
				<p>{get(elements, [index, 'title'])}</p>
			</div>
		);
	}

	return (
		<div className={classnames(className, 'c-projects-grid')}>
			{renderProject(0)}
			{renderProject(1)}
			{renderProject(2)}
		</div>
	);
};
