import { loremIpsum } from 'lorem-ipsum';

import image50x50 from '../../../static/images/50x50.jpg';

export const MOCK_QUOTE = {
	quote: loremIpsum({ count: 1 }),
	authorName: 'Albert Einstein',
	authorInitials: 'AE',
};

export const MOCK_QUOTE_WITH_IMG = {
	...MOCK_QUOTE,
	authorImage: image50x50,
};
