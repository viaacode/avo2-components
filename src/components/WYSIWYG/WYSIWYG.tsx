import React, { FunctionComponent, Suspense } from 'react';

import { WYSIWYGPropsSchema } from './WYSIWYG.types';

const WYSIWYGInternal = React.lazy(() => import('./WYSIWYGInternal'));

export const WYSIWYG: FunctionComponent<WYSIWYGPropsSchema> = (props) => {
	return (
		<Suspense
			fallback={<span>loading</span>} // TODO Used components are not included in main build and not loaded
		>
			<WYSIWYGInternal {...props} />
		</Suspense>
	);
};
