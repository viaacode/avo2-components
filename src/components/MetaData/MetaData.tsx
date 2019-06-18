import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

export interface MetaDataProps {
	type: 'collection' | 'video' | 'audio';
	meta?: string;
	impressions?: number;
	postedOn?: string;
}

export const MetaData: FunctionComponent<MetaDataProps> = ({
	meta,
	type,
	impressions,
	postedOn,
}: MetaDataProps) => {
	return (
		<ul className="c-meta-data c-meta-data--collection">
			{meta && <li className="c-meta-data__item">{meta}</li>}
			{impressions && (
				<li className="c-meta-data__item c-meta-data-item--icon">
					<Icon name={type === 'audio' ? 'headphone' : 'eye'} />
					<p>{impressions}</p>
				</li>
			)}
			{postedOn && <li className="c-meta-data__item">{postedOn}</li>}
		</ul>
	);
};
