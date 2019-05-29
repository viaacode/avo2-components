import React, { Fragment } from 'react';

export const withTitle = (story: Function, { name }) => (
	<Fragment>
		<h1>{name}</h1>
		{story()}
	</Fragment>
);
