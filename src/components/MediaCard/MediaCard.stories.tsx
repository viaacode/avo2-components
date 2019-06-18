import React from 'react';

import { storiesOf } from '@storybook/react';

import { Icon } from '../Icon/Icon';
import { MediaCard } from './MediaCard';

storiesOf('Media Card', module)
	.addParameters({ jest: ['Media Card'] })
	.add('Media Card (vertical)', () => (
		<div className="o-grid-col-bp3-4">
			<MediaCard
				title="Simba is jarig!"
				href="#"
				impressions={728}
				postedOn="2d geleden"
				meta={
					<ul className="c-meta-data">
						<li className="c-meta-data__item c-meta-data-item--icon">
							<Icon name="eye" />
							<p>272</p>
						</li>
						<li className="c-meta-data__item">2d geleden</li>}
					</ul>
				}
				thumbnailCategory="collection"
				thumbnailSrc="images/thumbnail.jpg"
				thumbnailMeta="7 items"
				thumbnailLabel="colllectie"
				thumbnailAlt="Simba is jarig!"
			/>
		</div>
	))
	.add('Media Card (horizontal)', () => (
		<div className="o-grid-col-bp4-4">
			<MediaCard
				orientation="horizontal"
				title="Simba is jarig!"
				href="#"
				impressions={728}
				postedOn="2d geleden"
				thumbnailCategory="collection"
				thumbnailSrc="images/thumbnail.jpg"
				thumbnailMeta="7 items"
				thumbnailLabel="colllectie"
				thumbnailAlt="Simba is jarig!"
			/>
		</div>
	));
