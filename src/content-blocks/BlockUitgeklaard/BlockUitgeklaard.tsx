import classnames from 'classnames';
import moment from 'moment';
import 'moment/locale/nl-be';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import './BlockUitgeklaard.scss';

moment.locale('nl-be');

export interface BlockUitgeklaardProps extends DefaultProps {
	className?: string;
	date: string;
	titles: string[];
}

export const BlockUitgeklaard: FunctionComponent<BlockUitgeklaardProps> = ({
	className,
	date,
	titles,
}) => (
	<div className={classnames(className, 'uitgeklaard-header')} role="banner">
		<div className="uitgeklaard-header__logo">
			<span>UITGEKLAARD</span>
		</div>
		{date && <div className="uitgeklaard-header__date">{moment(date).format('LL')}</div>}
		<div className="uitgeklaard-header__titles">{(titles || []).join(' • ')}</div>
	</div>
);
