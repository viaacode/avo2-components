import { render } from '@testing-library/react';

import { Box } from './Box';

describe('<Box />', () => {
	it('Should be able to render', () => {
		render(<Box>test</Box>);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-box-custom';

		const { container } = render(<Box className={customClass}>test</Box>);

		expect(container.firstChild).toHaveClass('c-box');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should set the correct className when passed the `condensed`-prop', () => {
		const { container } = render(<Box condensed>test</Box>);

		expect(container.firstChild).toHaveClass('c-box--padding-small');
	});

	it('Should set the correct className when passed the `backgroundColor`-prop', () => {
		const { container } = render(<Box backgroundColor="soft-white">test</Box>);

		expect(container.firstChild).toHaveClass('c-box--soft-white');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Box>
				<p className="box-test" />
			</Box>
		);

		const paragraph = container.querySelector('.box-test');

		expect(paragraph).toBeInTheDocument();
		expect((container.firstChild as HTMLElement).children).toHaveLength(1);
		expect((container.firstChild as HTMLElement).firstChild).toBe(paragraph);
	});
});
