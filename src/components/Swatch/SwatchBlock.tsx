import React, { Fragment, FunctionComponent } from 'react';

import { Swatch } from './Swatch';
import { SwatchList } from './SwatchList';

export interface SwatchBlockProps {
	title?: string;
	colors: {
		name: string;
		value: string;
	}[];
}

export const SwatchBlock: FunctionComponent<SwatchBlockProps> = ({
	title,
	colors,
}: SwatchBlockProps) => (
	<Fragment>
		{title && <h2>{title}</h2>}
		<SwatchList>
			{colors.map(({ name, value }) => (
				<Swatch color={value} name={name} />
			))}
		</SwatchList>
	</Fragment>
);
