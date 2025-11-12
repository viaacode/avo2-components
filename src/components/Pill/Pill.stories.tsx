import { Pill } from './Pill.js';
import { MOCK_PILL, MOCK_PILL__ACTIVE } from './Pill.mock.js';

export default {
	title: 'components/Pill',

	parameters: {
		jest: ['Pill'],
	},
};

export const Default = () => <Pill {...MOCK_PILL}>1024</Pill>;

Default.story = {
	name: 'default',
};

export const Active = () => <Pill {...MOCK_PILL__ACTIVE}>2048</Pill>;

Active.story = {
	name: 'active',
};
