import { fireEvent, render } from '@testing-library/react';

import { ImageGrid } from './ImageGrid';

// Unique sources: the component keys items by image source
const images = Array.from({ length: 10 }, (_, index) => `image-${index}.jpg`);

const getItems = (container: HTMLElement) =>
	container.querySelectorAll<HTMLElement>('.c-image-grid__item');

describe('<ImageGrid />', () => {
	it('Should be able to render', () => {
		render(<ImageGrid images={images} />);
	});

	it('Should set the correct default className and custom className', () => {
		const customClass = 'test-grid';

		const { container } = render(<ImageGrid className={customClass} images={images} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-image-grid');
		expect(container.firstChild).not.toHaveClass('c-image-grid-selectable');
	});

	it('Should set the correct className when selectable', () => {
		const { container } = render(<ImageGrid images={images} allowSelect={true} />);

		expect(container.firstChild).toHaveClass('c-image-grid');
		expect(container.firstChild).toHaveClass('c-image-grid-selectable');
	});

	it('Should set the correct styles for width and height', () => {
		const width = 123;
		const height = 321;
		const { container } = render(<ImageGrid images={images} width={width} height={height} />);

		const item = getItems(container)[0];

		expect(item.style.width).toBe(`${width}px`);
		expect(item.style.height).toBe(`${height}px`);
	});

	it('Should pass selected item (single)', () => {
		const onChangeHandler = jest.fn();

		const { container } = render(
			<ImageGrid images={images} allowSelect={true} onChange={onChangeHandler} />
		);

		fireEvent.click(getItems(container)[5]);

		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith([images[5]]);

		fireEvent.click(getItems(container)[3]);

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith([images[3]]);
	});

	it('Should pass first selected items (multi)', () => {
		const onChangeHandler = jest.fn();

		const { container } = render(
			<ImageGrid images={images} allowSelect={true} allowMulti={true} onChange={onChangeHandler} />
		);

		fireEvent.click(getItems(container)[5]);

		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith([images[5]]);
	});

	it('Should pass second selected items (multi)', () => {
		const onChangeHandler = jest.fn();

		const { container } = render(
			<ImageGrid
				images={images}
				allowSelect={true}
				allowMulti={true}
				onChange={onChangeHandler}
				value={[images[5]]}
			/>
		);

		fireEvent.click(getItems(container)[3]);

		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith([images[5], images[3]]);
	});

	it('Should correctly unselect items (multi)', () => {
		const onChangeHandler = jest.fn();

		const { container } = render(
			<ImageGrid
				images={images}
				allowSelect={true}
				allowMulti={true}
				onChange={onChangeHandler}
				value={[images[5], images[3]]}
			/>
		);

		fireEvent.click(getItems(container)[5]);

		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith([images[3]]);
	});
});
