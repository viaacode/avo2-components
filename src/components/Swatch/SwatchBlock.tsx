import type React from 'react';
import { Fragment, type FunctionComponent } from 'react';

import { Swatch } from './Swatch';
import { SwatchList } from './SwatchList';

export interface SwatchBlockProps {
	children?: React.ReactNode;
	title?: string;
	colors: {
		name: string;
		value: string;
	}[];
}

export const SwatchBlock: FunctionComponent<SwatchBlockProps> = ({ title, colors }) => (
	<Fragment>
		{title && <h1 className="c-h1">{title}</h1>}
		<SwatchList>
			{colors.map(({ name, value }) => (
				<Swatch key={`color--${name}`} color={value} name={name} />
			))}
		</SwatchList>
	</Fragment>
);
