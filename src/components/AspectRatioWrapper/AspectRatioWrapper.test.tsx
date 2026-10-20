import { render } from '@testing-library/react';

import { AspectRatioWrapper, type AspectRatioWrapperPropsSchema } from './AspectRatioWrapper';

const aspectRatioWrapper = (props: AspectRatioWrapperPropsSchema = {}) => (
	<AspectRatioWrapper {...props}>
		{/** biome-ignore lint/a11y/useMediaCaption: this is a test file, no need for accessibility */}
		<video
			src="https://archief-media.viaa.be/viaa/TESTBEELD/c44b877a9a7d4b1a99c5b8b676c3aef4ca370f2fe15d42d49b438e71eea6b99d/browse.mp4"
			controls
		/>
	</AspectRatioWrapper>
);

describe('<AspectRatioWrapper>', () => {
	it('should be able to render', () => {
		render(aspectRatioWrapper());
	});

	it('should set the correct className', () => {
		const { container } = render(aspectRatioWrapper());

		expect(container.firstChild).toHaveClass('c-aspect-ratio-wrapper');
	});

	it('should set the correct className for the aspect ratio', () => {
		const { container: container32 } = render(aspectRatioWrapper({ aspect: '3:2' }));
		const { container: container169 } = render(aspectRatioWrapper({ aspect: '16:9' }));

		expect(container32.firstChild).toHaveClass('c-aspect-ratio-wrapper--aspect-3-2');
		expect(container169.firstChild).toHaveClass('c-aspect-ratio-wrapper--aspect-16-9');
	});
});
