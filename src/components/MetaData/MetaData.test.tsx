import { render, screen } from '@testing-library/react';
import { AvoContentTypeEnglish } from '@viaa/avo2-types';

import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from './MetaData';
import { MetaDataItem } from './MetaDataItem/MetaDataItem';

describe('<MetaDataItem />', () => {
	it('Should be able to render', () => {
		render(
			<MetaData category={AvoContentTypeEnglish.VIDEO}>
				<MetaDataItem label="VRT" />s
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-meta-data-custom';

		const { container } = render(
			<MetaData category={AvoContentTypeEnglish.VIDEO} className={customClass}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-meta-data');
	});

	it('Should set the correct className with each category', () => {
		const items = (
			<>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</>
		);
		const { container: collectionContainer } = render(
			<MetaData category={AvoContentTypeEnglish.COLLECTION}>{items}</MetaData>
		);
		const { container: videoContainer } = render(
			<MetaData category={AvoContentTypeEnglish.VIDEO}>{items}</MetaData>
		);
		const { container: audioContainer } = render(
			<MetaData category={AvoContentTypeEnglish.AUDIO}>{items}</MetaData>
		);
		const { container: bundleContainer } = render(
			<MetaData category={AvoContentTypeEnglish.BUNDLE}>{items}</MetaData>
		);

		expect(collectionContainer.firstChild).toHaveClass('c-meta-data--collection');
		expect(videoContainer.firstChild).toHaveClass('c-meta-data--video');
		expect(audioContainer.firstChild).toHaveClass('c-meta-data--audio');
		expect(bundleContainer.firstChild).toHaveClass('c-meta-data--bundle');
	});

	it('Should set the correct className when spaced is passed', () => {
		const { container } = render(
			<MetaData category={AvoContentTypeEnglish.VIDEO} spaced>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		expect(container.firstChild).toHaveClass('c-meta-data--spaced-out');
	});

	it('Should correctly pass children', () => {
		render(
			<MetaData category={AvoContentTypeEnglish.VIDEO}>
				<MetaDataItem label="VRT" />
				<MetaDataItem icon={IconNameSchema.headphone} label="738" />
				<MetaDataItem label="2d geleden" />
			</MetaData>
		);

		expect(screen.getAllByRole('listitem')).toHaveLength(3);
		expect(screen.getByText('VRT')).toBeInTheDocument();
		expect(screen.getByText('738')).toBeInTheDocument();
		expect(screen.getByText('2d geleden')).toBeInTheDocument();
	});
});
