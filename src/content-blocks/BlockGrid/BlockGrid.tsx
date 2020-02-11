import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Spacer } from '../../components/Spacer/Spacer';
import { ButtonAction, DefaultProps } from '../../types';

import './BlockGrid.scss';

export interface GridItem {
	source: string;
	title?: string;
	text?: string;
	action?: ButtonAction;
}

export interface BlockGridProps extends DefaultProps {
	elements: GridItem[];
	imageWidth?: number;
	imageHeight?: number;
	itemWidth?: number;
	fill?: 'cover' | 'contain' | 'auto';
	textAlign?: 'left' | 'center' | 'right';
	className?: string;
	navigate?: (action: ButtonAction) => void;
}

export const BlockGrid: FunctionComponent<BlockGridProps> = ({
	elements = [],
	imageWidth = 200,
	imageHeight = 200,
	itemWidth = 200,
	fill = 'cover',
	textAlign = 'center',
	className,
	navigate,
}) => {
	return (
		<div className={classnames('c-block-grid', `text-align-${textAlign}`, className)}>
			{elements.map(element => (
				<div
					key={element.source}
					className={classnames('c-block-grid__item', {
						'u-clickable': !!navigate && !!element.action,
					})}
					style={{ width: `${itemWidth}px` }}
				>
					<div
						className="c-block-grid__image"
						style={{
							width: `${imageWidth}px`,
							height: `${imageHeight}px`,
							backgroundImage: `url(${element.source})`,
							backgroundSize: fill,
						}}
						onClick={() => {
							if (element.action && navigate) {
								navigate(element.action);
							}
						}}
					/>
					<div>
						{!!element.title && (
							<Spacer margin="top-small">
								<h3>
									<strong>{element.title}</strong>
								</h3>
							</Spacer>
						)}
						{!!element.text && (
							<Spacer margin="top-small">
								<p>{element.text}</p>
							</Spacer>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
