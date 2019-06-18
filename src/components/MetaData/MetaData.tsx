import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

export interface MetaDataProps {
	category: 'collection' | 'video' | 'audio';
	meta: string;
	impressions: number;
	postedOn: string;
}

export const MetaData: FunctionComponent<MetaDataProps> = ({
	meta,
	category,
	impressions,
	postedOn,
}: MetaDataProps) => {
	return (
		<ul className={`c-meta-data c-meta-data--${category}`}>
			<li className="c-meta-data__item">{meta}</li>
			<li className="c-meta-data__item c-meta-data-item--icon">
				<Icon name={category === 'audio' ? 'headphone' : 'eye'} />
				<p>{impressions}</p>
			</li>
			<li className="c-meta-data__item">{postedOn}</li>
		</ul>
	);
};
