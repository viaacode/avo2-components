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

export interface BlockImageProps extends DefaultProps {
	imageInfos: ImageInfo[];
	navigate?: (buttonAction: ButtonAction) => void;
}

export const BlockProjectsSpotlight: FunctionComponent<BlockImageProps> = ({
	imageInfos,
	navigate,
	className,
}) => {
	const navigateToProject = (index: number) => {
		const action = get(imageInfos, [index, 'buttonAction']);
		if (action && navigate) {
			navigate(action);
		}
	};

	function renderProject(index: number, type: 'primary' | 'secondary') {
		return (
			<div
				className={classnames(`c-project-spotlight-${type}`, { 'u-clickable': !!navigate })}
				style={{ backgroundImage: `url(${get(imageInfos, [index, 'image'])})` }}
				onClick={() => navigateToProject(0)}
			>
				<p>{get(imageInfos, [0, 'title'])}</p>
			</div>
		);
	}

	return (
		<div className={classnames(className, 'o-projects-spotlight')}>
			{renderProject(0, 'primary')}
			{renderProject(0, 'secondary')}
			{renderProject(0, 'secondary')}
		</div>
	);
};
