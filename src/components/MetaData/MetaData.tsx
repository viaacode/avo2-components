import React, { FunctionComponent } from 'react';

import { Icon } from '../Icon/Icon';

export interface MetaDataProps {
	preMeta?: string;
	category?: 'collection' | 'video' | 'audio' | 'map';
	impressions?: number;
	postedOn?: string;
	postMeta?: string;
}

export const MetaData: FunctionComponent<MetaDataProps> = ({
	preMeta,
	category,
	impressions,
	postedOn,
	postMeta,
}: MetaDataProps) => {
	return (
		<ul className={`c-meta-data c-meta-data--${category}`}>
			{preMeta && <li className="c-meta-data__item">{preMeta}</li>}
			{impressions && category && (
				<li className="c-meta-data__item c-meta-data-item--icon">
					<Icon name={category === 'audio' ? 'headphone' : 'eye'} />
					<p>{impressions}</p>
				</li>
			)}
			{postedOn && <li className="c-meta-data__item">{postedOn}</li>}
			{postMeta && <li className="c-meta-data__item">{postMeta}</li>}
		</ul>
	);
};
