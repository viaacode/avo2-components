import { COLORS } from '../../colors';

import { Spinner } from './Spinner';

export default {
	title: 'components/Spinner',

	parameters: {
		jest: ['Spinner'],
	},
};

export const _Spinner = () => <Spinner locationId="test" />;
export const LargeSpinner = () => <Spinner size="large" locationId="test" />;

LargeSpinner.story = {
	name: 'Large spinner',
};

export const LightSpinner = () => (
	<span style={{ padding: '20px', backgroundColor: COLORS.GRAYSCALE.G800 }}>
		<Spinner light locationId="test" />
	</span>
);

LightSpinner.story = {
	name: 'Light spinner',
};
