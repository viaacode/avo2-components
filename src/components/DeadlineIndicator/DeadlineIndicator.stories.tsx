import { DeadlineIndicator } from './DeadlineIndicator';

export default {
	title: 'components/DeadlineIndicator',

	parameters: {
		jest: ['DeadlineIndicator'],
	},
};

export const DeadlineIndicators = () => (
	<>
		<DeadlineIndicator />
		<DeadlineIndicator color="yellow" />
		<DeadlineIndicator color="success" />

		<DeadlineIndicator shape="square" />
		<DeadlineIndicator shape="diamond" />
		<DeadlineIndicator shape="circle" />
	</>
);

DeadlineIndicators.story = {
	name: 'DeadlineIndicators',
};
