import { render, screen } from '@testing-library/react';

import { Quote } from './Quote';
import { MOCK_QUOTE_WITH_IMG } from './Quote.mock';

const CUSTOM_CLASS = 'c-block-custom';

export const quoteExample = <Quote className={CUSTOM_CLASS} {...MOCK_QUOTE_WITH_IMG} />;

describe('<Quote />', () => {
	it('Should be able to render', () => {
		render(quoteExample);
	});

	it('Should render the quote text correctly', () => {
		const { container } = render(quoteExample);

		expect(container.querySelector('blockquote')).toHaveTextContent(MOCK_QUOTE_WITH_IMG.quote);
	});

	it('Should render the author name correctly', () => {
		render(quoteExample);

		const spanElement = screen.getByText(MOCK_QUOTE_WITH_IMG.authorName);

		expect(spanElement.tagName).toBe('SPAN');
	});

	it('Should set the correct className', () => {
		const { container } = render(quoteExample);

		const quoteDivElements = container.querySelectorAll('.c-quote');
		const quoteDivElement = quoteDivElements[0];

		expect(quoteDivElements).toHaveLength(1);
		expect(quoteDivElement).toHaveClass(CUSTOM_CLASS);
		expect(quoteDivElement.querySelector('blockquote')).toHaveClass('c-quote__text');
		expect(quoteDivElement.querySelector('cite')).toHaveClass('c-quote__author');
	});
});
