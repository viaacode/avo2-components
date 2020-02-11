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
	items: GridItem[];
	imageWidth?: number;
	imageHeight?: number;
	itemWidth?: number;
	fill?: 'cover' | 'contain' | 'auto';
	textAlign?: 'left' | 'center' | 'right';
	className?: string;
	navigate?: (action: ButtonAction) => void;
}

export const BlockGrid: FunctionComponent<BlockGridProps> = ({
	items = [],
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
			{items.map(item => (
				<div
					key={item.source}
					className={classnames('c-block-grid__item', {
						'u-clickable': !!navigate && !!item.action,
					})}
					style={{ width: `${itemWidth}px` }}
				>
					<div
						className="c-block-grid__image"
						style={{
							width: `${imageWidth}px`,
							height: `${imageHeight}px`,
							backgroundImage: `url(${item.source})`,
							backgroundSize: fill,
						}}
						onClick={() => {
							if (item.action && navigate) {
								navigate(item.action);
							}
						}}
					/>
					<div>
						{!!item.title && (
							<Spacer margin="top-small">
								<h3>
									<strong>{item.title}</strong>
								</h3>
							</Spacer>
						)}
						{!!item.text && (
							<Spacer margin="top-small">
								<p>{item.text}</p>
							</Spacer>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
