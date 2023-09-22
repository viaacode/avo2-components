import React, { FunctionComponent } from 'react';

export interface SwatchProps {
	children?: React.ReactNode;
	color: string;
	name: string;
}

export const Swatch: FunctionComponent<SwatchProps> = ({ color, name }) => (
	<div className="c-swatch">
		<div className="c-swatch__block" style={{ backgroundColor: color }} />
		<div className="c-swatch__info">
			<div className="c-swatch__color-name">{name}</div>
			<div className="c-swatch__color-hex">{color}</div>
		</div>
	</div>
);
