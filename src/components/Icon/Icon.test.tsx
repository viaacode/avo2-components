import { render } from '@testing-library/react';

import { Icon } from './Icon';
import { IconNameSchema } from './Icon.types';
import { Download, Slash, ThumbsUp } from './Icons';

describe('<Icon />', () => {
	it('Should render when a known icon is passed', () => {
		const { container } = render(<Icon name={IconNameSchema.download} />);
		const { container: expected } = render(<Download />);

		expect((container.firstChild as HTMLElement).innerHTML).toEqual(expected.innerHTML);
	});

	it('Should render slash icon when an unknown icon name is passed', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const { container } = render(<Icon name={'foobar' as IconNameSchema} />);
		const { container: expected } = render(<Slash />);

		expect((container.firstChild as HTMLElement).innerHTML).toEqual(expected.innerHTML);
		expect(consoleErrorSpy).toHaveBeenCalledWith('Icon with name: foobar was not found.');
		consoleErrorSpy.mockRestore();
	});

	it('Should render icon when name was passed as kebab-case', () => {
		const { container } = render(<Icon name={'thumbs-up' as IconNameSchema} />);
		const { container: expected } = render(<ThumbsUp />);

		expect((container.firstChild as HTMLElement).innerHTML).toEqual(expected.innerHTML);
	});

	it('Should correctly pass a custom className', () => {
		const customClass = 'c-icon-custom';

		const { container } = render(<Icon className={customClass} name={IconNameSchema.download} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('o-svg-icon');
	});

	it('Should correctly set the className without type', () => {
		const { container } = render(<Icon name={IconNameSchema.download} />);

		expect(container.firstChild).toHaveClass('o-svg-icon');
		expect(container.firstChild).toHaveClass('o-svg-icon--download');
	});

	it('Should correctly set the className with type', () => {
		const { container: socialContainer } = render(
			<Icon name={IconNameSchema.twitter} type="social" />
		);
		const { container: multicolorContainer } = render(
			<Icon name={IconNameSchema.circleCheck} type="multicolor" />
		);

		expect(socialContainer.firstChild).toHaveClass('o-svg-icon-social-twitter');
		expect(socialContainer.firstChild).not.toHaveClass('o-svg-icon-multicolor');
		expect(multicolorContainer.firstChild).toHaveClass('o-svg-icon-multicolor');
		expect(multicolorContainer.firstChild).toHaveClass('o-svg-icon-multicolor-circle-check');
		expect(multicolorContainer.firstChild).not.toHaveClass('o-svg-icon-social-circle-check');
	});

	it('Should correctly set the subtle class when the subtle option is true', () => {
		const { container } = render(<Icon name={IconNameSchema.twitter} subtle />);

		expect(container.firstChild).toHaveClass('o-svg-icon--subtle');
	});

	it('Should correctly set the sizing className', () => {
		const { container: smallContainer } = render(
			<Icon name={IconNameSchema.circleCheck} size="small" />
		);
		const { container: largeContainer } = render(
			<Icon name={IconNameSchema.circleCheck} size="large" />
		);
		const { container: hugeContainer } = render(
			<Icon name={IconNameSchema.circleCheck} size="huge" />
		);

		expect(smallContainer.firstChild).toHaveClass('o-svg-icon--small');
		expect(largeContainer.firstChild).toHaveClass('o-svg-icon--large');
		expect(hugeContainer.firstChild).toHaveClass('o-svg-icon--huge');
	});

	it('Should correctly set the className when active', () => {
		const { container: activeContainer } = render(
			<Icon name={IconNameSchema.circleCheck} active={true} />
		);
		const { container: inactiveContainer } = render(
			<Icon name={IconNameSchema.circleCheck} active={false} />
		);

		expect(activeContainer.firstChild).toHaveClass('o-svg-icon--action-active');
		expect(inactiveContainer.firstChild).not.toHaveClass('o-svg-icon--action-active');
	});
});
