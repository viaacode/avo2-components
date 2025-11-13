import { Badge } from './Badge';

export default {
	title: 'components/Badge',

	parameters: {
		jest: ['Badge'],
	},
};

export const _Badge = () => <Badge text="Pending approval" />;
export const SuccessBadge = () => <Badge text="Approval granted" type="success" />;

SuccessBadge.story = {
	name: 'Success badge',
};

export const ErrorBadge = () => <Badge text="Approval denied" type="error" />;

ErrorBadge.story = {
	name: 'Error badge',
};
