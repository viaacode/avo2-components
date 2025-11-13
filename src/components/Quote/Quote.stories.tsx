import { Quote } from './Quote';
import { MOCK_QUOTE, MOCK_QUOTE_WITH_IMG } from './Quote.mock';

export default {
	title: 'components/Quote',

	parameters: {
		jest: ['Quote'],
	},
};

export const _Quote = () => <Quote {...MOCK_QUOTE_WITH_IMG} />;
export const QuoteNoAvatar = () => <Quote {...MOCK_QUOTE} />;

QuoteNoAvatar.story = {
	name: 'Quote no avatar',
};
