import { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';
import { shallow } from 'enzyme';
import { HeaderContentType } from './HeaderContentType';

describe('<HeaderContentType />', () => {
	it('Should be able to render', () => {
		shallow(<HeaderContentType category={AvoContentTypeEnglish.COLLECTION} label="collectie" />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-header-content-type-custom';
		const HeaderContentTypeComponent = (
			<HeaderContentType
				className={customClass}
				category={AvoContentTypeEnglish.COLLECTION}
				label="collectie"
			/>
		);

		expect(shallow(HeaderContentTypeComponent).hasClass(customClass)).toBeTruthy();
	});
});
