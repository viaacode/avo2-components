import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './BlockKlaar.scss';

export interface BlockKlaarProps extends DefaultProps {
	date: string;
	titles: string[];
}

export const BlockKlaar: FunctionComponent<BlockKlaarProps> = ({ className, date, titles }) => {
	return (
		<div className={classnames(className, 'klaar-header')} role="banner">
			<div className="klaar-header__logo">
				<span>KLAAR</span>
			</div>
			<div className="klaar-header__date">{date}</div>
			<div className="klaar-header__titles">
				{titles.map(
					(title: string, index: number) =>
						`${title.toUpperCase()} ${index === titles.length - 1 ? '' : ' • '}`
				)}
			</div>
		</div>
	);
};
