import { get } from 'lodash-es';
import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { ButtonAction, DefaultProps } from '../../types';

import './BlockProjectsSpotlight.scss';

export interface ImageInfo {
	image: string;
	title: string;
	buttonAction: ButtonAction;
	className?: string;
}

export interface BlockProjectsSpotlightProps extends DefaultProps {
	elements: ImageInfo[];
	navigate?: (buttonAction: ButtonAction) => void;
}

export const BlockProjectsSpotlight: FunctionComponent<BlockProjectsSpotlightProps> = ({
	elements,
	navigate,
	className,
}) => {
	const navigateToProject = (index: number) => {
		const action = get(elements, [index, 'buttonAction']);
		if (action && navigate) {
			navigate(action);
		}
	};

	function renderProject(index: number, type: 'primary' | 'secondary') {
		if (!elements[index]) {
			return null;
		}
		return (
			<div
				className={classnames(`c-project-spotlight-${type}`, { 'u-clickable': !!navigate })}
				style={{ backgroundImage: `url(${get(elements, [index, 'image'])})` }}
				onClick={() => navigateToProject(index)}
			>
				<p>{get(elements, [index, 'title'])}</p>
			</div>
		);
	}

	return (
		<div className={classnames(className, 'o-projects-spotlight')}>
			{renderProject(0, 'primary')}
			{renderProject(1, 'secondary')}
			{renderProject(2, 'secondary')}
		</div>
	);
};
