import { render, screen } from '@testing-library/react';

import { Spacer, type SpacerOptionSchema } from './Spacer';

describe('<Spacer />', () => {
	it('Should be able to render', () => {
		render(<Spacer />);
	});

	it('Should set the correct className', () => {
		const cumstomClass = 'c-spacer-custom';

		const { container } = render(<Spacer className={cumstomClass} />);

		expect(container.firstChild).toHaveClass(cumstomClass);
		expect(container.firstChild).toHaveClass('u-spacer');
	});

	it('Should set the correct className when margin/padding is passed (string)', () => {
		const { container } = render(<Spacer margin="left-small" padding="left-small" />);

		expect(container.firstChild).toHaveClass('u-spacer-left-s');
		expect(container.firstChild).toHaveClass('u-padding-left-s');
	});

	it('Should set no padding/margin when none is passed', () => {
		const { container } = render(<Spacer margin="none" padding="none" />);

		expect((container.firstChild as HTMLElement).className).toBe('');
	});

	it('Should set the correct className when margin/padding is passed (array)', () => {
		const { container } = render(<Spacer margin={['left-small']} padding={['left-small']} />);

		expect(container.firstChild).toHaveClass('u-spacer-left-s');
		expect(container.firstChild).toHaveClass('u-padding-left-s');
	});

	it('Should set the correct className when multiple margins/paddings are passed', () => {
		const spacers: SpacerOptionSchema[] = ['left-small', 'top-large', 'right-extra-large'];
		const { container } = render(<Spacer margin={spacers} padding={spacers} />);

		expect(container.firstChild).toHaveClass('u-spacer-left-s');
		expect(container.firstChild).toHaveClass('u-spacer-top-l');
		expect(container.firstChild).toHaveClass('u-spacer-right-xl');

		expect(container.firstChild).toHaveClass('u-padding-left-s');
		expect(container.firstChild).toHaveClass('u-padding-top-l');
		expect(container.firstChild).toHaveClass('u-padding-right-xl');
	});

	it('Should correctly pass children', () => {
		const { container } = render(
			<Spacer margin="large">
				<p>What a nice smile you have there!</p>
			</Spacer>
		);

		expect(container.firstChild).toContainElement(
			screen.getByText('What a nice smile you have there!')
		);
	});
});
