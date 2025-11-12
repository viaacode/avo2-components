import { COLORS } from '../../colors/index.js';

import { Spinner } from './Spinner.js';

export default {
	title: 'components/Spinner',

	parameters: {
		jest: ['Spinner'],
	},
};

export const _Spinner = () => <Spinner />;
export const LargeSpinner = () => <Spinner size="large" />;

LargeSpinner.story = {
	name: 'Large spinner',
};

export const LightSpinner = () => (
	<span style={{ padding: '20px', backgroundColor: COLORS.GRAYSCALE.G800 }}>
		<Spinner light />
	</span>
);

LightSpinner.story = {
	name: 'Light spinner',
};
