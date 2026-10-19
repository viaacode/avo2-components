import { render, screen } from '@testing-library/react';

import image500x200 from '../../../static/images/500x200.jpg';

import { Image } from './Image';

describe('<Image />', () => {
	it('Should be able to render', () => {
		render(<Image src={image500x200} alt="dummy image 500 by 200" />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-image-custom';

		const { container } = render(
			<Image className={customClass} src={image500x200} alt="dummy image 500 by 200" />
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-image');
		expect(container.firstChild).not.toHaveClass('c-image--full');
	});

	it('Should set the correct className in wide mode', () => {
		const { container } = render(<Image src={image500x200} alt="dummy image 500 by 200" wide />);

		expect(container.firstChild).toHaveClass('c-image--full');
	});

	it('Should correctly pass on `src` and `alt` to the img tag', () => {
		const src = image500x200;
		const alt = 'image showing the default dimensions on a grey background';

		render(<Image src={src} alt={alt} />);

		const imageElement = screen.getByRole('img', { name: alt });

		expect(imageElement).toHaveAttribute('src', String(src));
		expect(imageElement).toHaveAttribute('alt', alt);
	});
});
