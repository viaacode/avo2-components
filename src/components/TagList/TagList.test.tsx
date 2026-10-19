import { fireEvent, render, screen } from '@testing-library/react';

import { noop } from '../../helpers/noop';

import { TagList } from './TagList';

const tags = [
	{ label: 'Aluminium', id: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium' },
	{ label: 'Potassium', id: 'potassium' },
	{ label: 'Vanadium', id: 'vanadium' },
	{ label: 'Palladium', id: 'palladium' },
	{ label: 'Polonium', id: 'polonium' },
	{ label: 'Rhodium', id: 'rhodium' },
	{ label: 'Yttrium', id: 'yttrium' },
	{ label: 'Uranium', id: 'uranium' },
];

describe('<TagList />', () => {
	it('Should be able to render', () => {
		render(<TagList tags={tags} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-tag-list-custom';

		const { container } = render(<TagList className={customClass} tags={tags} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-tag-list');
	});

	it('Should correctly render the labels', () => {
		const { container: tagListContainer } = render(<TagList tags={tags} />);
		const { container: tagListClosableContainer } = render(
			<TagList tags={tags} closable={true} />
		);
		const { container: tagListSwatchesContainer } = render(
			<TagList tags={tags} swatches={true} />
		);
		const { container: tagListClickableContainer } = render(
			<TagList tags={tags} onTagClicked={noop} />
		);

		[
			tagListContainer,
			tagListClosableContainer,
			tagListSwatchesContainer,
			tagListClickableContainer,
		].forEach((container) => {
			expect(container.querySelector('.c-label-text')).toHaveTextContent(tags[0].label);
		});
	});

	it('Should be able to render with swatches', () => {
		const { container } = render(<TagList tags={tags} swatches={true} />);

		expect(container.querySelectorAll('.c-label-swatch')).toHaveLength(tags.length);
	});

	it('Should be able to render without swatches', () => {
		const { container } = render(<TagList tags={tags} swatches={false} />);

		expect(container.querySelectorAll('.c-label-swatch')).toHaveLength(0);
	});

	it('Should set the correct className for labels when rendering with swatches', () => {
		const { container } = render(<TagList tags={tags} swatches={true} />);

		expect(container.querySelectorAll('.c-label-text')).toHaveLength(tags.length);
		expect(container.querySelectorAll('.c-tag__label')).toHaveLength(0);
	});

	it('Should set the correct className for labels when rendering without swatches', () => {
		const { container } = render(<TagList tags={tags} swatches={false} closable={true} />);

		expect(container.querySelectorAll('.c-label-text')).toHaveLength(0);
		expect(container.querySelectorAll('.c-tag__label')).toHaveLength(tags.length);
	});

	it('Should not render a <p class="c-label-text"> nor <p class="c-tag__label"> when tag has no swatches & is not closable', () => {
		const { container } = render(<TagList tags={tags} swatches={false} closable={false} />);

		expect(container.querySelectorAll('p')).toHaveLength(0);
		expect(container.querySelectorAll('.c-label-text')).toHaveLength(0);
		expect(container.querySelectorAll('.c-tag__label')).toHaveLength(0);
	});

	it('Should be able to render with borders', () => {
		const { container } = render(<TagList tags={tags} />);

		expect(container.querySelectorAll('.c-tag')).toHaveLength(tags.length);
	});

	it('Should be able to render without borders', () => {
		const { container } = render(<TagList tags={tags} bordered={false} />);

		expect(container.querySelectorAll('.c-label')).toHaveLength(tags.length);
	});

	it('Should be able to render close buttons', () => {
		const { container } = render(<TagList tags={tags} closable />);

		expect(container.querySelectorAll('a .o-svg-icon--close')).toHaveLength(tags.length);
	});

	it('Should call `onTagClosed` when closing a tag', () => {
		const onTagClosedHandler = jest.fn();

		const { container } = render(
			<TagList tags={tags} closable onTagClosed={onTagClosedHandler} />
		);

		const closeTagElements = container.querySelectorAll('a');

		const indexToClose = 5;
		// close the 6th element in the list
		fireEvent.click(closeTagElements[indexToClose]);

		expect(onTagClosedHandler).toHaveBeenCalled();
		expect(onTagClosedHandler).toHaveBeenCalledTimes(1);
		expect(onTagClosedHandler).toHaveBeenCalledWith(
			tags[indexToClose].id,
			expect.objectContaining({ type: 'click' })
		);
	});

	it('Should call `onTagClicked` when clicking a tag', () => {
		const onTagClickedHandler = jest.fn();

		render(<TagList tags={tags} closable onTagClicked={onTagClickedHandler} />);

		const indexToClose = 5;
		// close the 6th element in the list
		fireEvent.click(screen.getByText(tags[indexToClose].label));

		expect(onTagClickedHandler).toHaveBeenCalled();
		expect(onTagClickedHandler).toHaveBeenCalledTimes(1);
		expect(onTagClickedHandler).toHaveBeenCalledWith(
			tags[indexToClose].id,
			expect.objectContaining({ type: 'click' })
		);
	});
});
