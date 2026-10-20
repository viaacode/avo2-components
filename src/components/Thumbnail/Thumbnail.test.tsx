import { render, screen } from '@testing-library/react';
import { AvoContentTypeEnglish } from '@viaa/avo2-types';

import { Thumbnail } from './Thumbnail';

describe('<Thumbnail />', () => {
	it('Should be able to render', () => {
		render(
			<Thumbnail
				src="/images/thumbnail.jpg"
				meta="4 items"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-thumbnail-custom';

		const { container } = render(
			<Thumbnail
				className={customClass}
				src="/images/thumbnail.jpg"
				meta="4 items"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-thumbnail');
		expect(container.firstChild).toHaveClass('c-thumbnail-media');
	});

	it('Should set the correct className for each category', () => {
		const { container } = render(
			<Thumbnail
				src="/images/thumbnail.jpg"
				meta="4 items"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);

		expect(container.firstChild).toHaveClass('c-thumbnail-media--collection');
	});

	it('Should render image if src is correctly passed', () => {
		const img = '/images/thumbnail.jpg';
		const { container } = render(
			<Thumbnail
				src={img}
				meta="4 items"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);

		const imageContainers = container.querySelectorAll<HTMLElement>('.c-thumbnail-image');
		expect(imageContainers).toHaveLength(1);
		expect(imageContainers[0].style.backgroundImage).toEqual(`url(${img})`);
	});

	it('Should render placeholder if no src is passed', () => {
		const { container } = render(
			<Thumbnail meta="4 items" category={AvoContentTypeEnglish.COLLECTION} label="collection" />
		);

		expect(container.querySelectorAll('.c-thumbnail-image')).toHaveLength(0);
		expect(container.querySelectorAll('.c-thumbnail-placeholder')).toHaveLength(1);
	});

	it('Should correctly set alt if it was passed', () => {
		const alt = 'thumbnail';

		const { container } = render(
			<Thumbnail
				src="/images/thumbnail.jpg"
				alt={alt}
				meta="4 items"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);

		expect(container.querySelector('.c-thumbnail-image')).toHaveAttribute('title', alt);
	});

	it('Should render meta if it was passed', () => {
		render(
			<Thumbnail
				src="/images/thumbnail.jpg"
				meta="4 items"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);

		expect(screen.getByText('4 items')).toHaveClass('c-thumbnail-media__meta');
	});

	it('Should not render meta if it was not passed', () => {
		const { container } = render(
			<Thumbnail
				src="/images/thumbnail.jpg"
				category={AvoContentTypeEnglish.COLLECTION}
				label="collection"
			/>
		);

		expect(container.querySelectorAll('.c-thumbnail-media__meta')).toHaveLength(0);
	});
});
