import { shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import image50x50 from '../../../static/images/50x50.jpg';

import { BlockQuote } from './BlockQuote';

const customClass = 'c-block-custom';
const quote = loremIpsum({ count: 10 });
const authorImage = image50x50;
const authorName = loremIpsum({ count: 2 });
const authorInitials = 'AE';

export const quoteExample = (
	<BlockQuote
		className={customClass}
		quote={quote}
		authorImage={authorImage}
		authorName={authorName}
		authorInitials={authorInitials}
	/>
);

describe('<BlockQuote />', () => {
	it('Should be able to render', () => {
		shallow(quoteExample);
	});
});
