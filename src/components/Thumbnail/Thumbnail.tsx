import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

export interface ThumbnailProps {
	src?: string;
	icon: string;
	label?: string;
	count?: string;
	href: string;
}

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({
	src,
	icon,
	label,
	count,
	href,
}: ThumbnailProps) => {
	return (
		<div className="c-media-card c-media-card--collection">
			<a className="c-media-card-thumb" href={href}>
				<div className="c-thumbnail c-thumbnail-media c-thumbnail-media--collection">
					{src ? (
						<img src={src} className="c-thumbnail-placeholder" />
					) : (
						<div className="c-thumbnail-placeholder">{icon && <Icon name={icon} />}</div>
					)}
					<div className="c-thumbnail-meta">
						<div className="c-thumbnail-media__category">
							<Icon name={icon} />
							{label && <p>{label}</p>}
						</div>
						{count && <div className="c-thumbnail-media__meta">{count} items</div>}
					</div>
				</div>
			</a>
		</div>
	);
};
