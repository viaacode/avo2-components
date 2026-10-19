import { render, screen } from '@testing-library/react';

import { IconNameSchema } from '../Icon/Icon.types';

import { Blankslate } from './Blankslate';

describe('<Blankslate />', () => {
	it('Should be able to render', () => {
		render(
			<Blankslate
				title="This is a blank slate"
				body="Use it to provide information when no dynamic content exists."
			/>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-blankslate';

		const { container } = render(
			<Blankslate
				className={customClass}
				title="This is a blank slate"
				body="Use it to provide information when no dynamic content exists."
			/>
		);

		expect(container.firstChild).toHaveClass('c-blankslate');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should set the correct className when in spacious mode', () => {
		const { container } = render(
			<Blankslate
				title="This is a blank slate"
				body="Use it to provide information when no dynamic content exists."
				spacious
			/>
		);

		expect(container.firstChild).toHaveClass('c-blankslate--spacious');
	});

	it('Should render the title correctly', () => {
		const title = 'This is a test';

		render(
			<Blankslate
				title={title}
				body="Use it to provide information when no dynamic content exists."
			/>
		);

		const titleElement = screen.getByRole('heading', { level: 4 });

		expect(titleElement).toHaveClass('c-h4');
		expect(titleElement).toHaveTextContent(title);
	});

	it('Should render the body correctly', () => {
		const body = 'Lorem ipsum test';

		render(<Blankslate title="This is a blank slate" body={body} />);

		const bodyElement = screen.getByText(body);

		expect(bodyElement.tagName).toBe('P');
		expect(bodyElement).toHaveClass('c-body-1');
	});

	it('Should be able to render an icon', () => {
		const iconName = IconNameSchema.database;

		const { container } = render(
			<Blankslate
				title="This is a blank slate"
				body="Use it to provide information when no dynamic content exists."
				icon={iconName}
			/>
		);

		const iconElements = container.querySelectorAll('.o-svg-icon');

		expect(iconElements).toHaveLength(1);
		expect(iconElements[0]).toHaveClass(`o-svg-icon--${iconName}`);
		expect(iconElements[0]).toHaveClass('o-svg-icon--large');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Blankslate
				title="This is a blank slate"
				body="Use it to provide information when no dynamic content exists."
			>
				<p id="blankslate-test" />
			</Blankslate>
		);

		const paragraph = container.querySelector('#blankslate-test');

		expect(paragraph).toBeInTheDocument();
		expect(paragraph?.parentElement).toBe(container.firstChild);
	});
});
