import { Avo } from '@viaa/avo2-types';
import { shallow } from 'enzyme';
import { HeaderContentType } from './HeaderContentType.js';

describe('<HeaderContentType />', () => {
	it('Should be able to render', () => {
		shallow(<HeaderContentType category={Avo.ContentType.English.COLLECTION} label="collectie" />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-header-content-type-custom';
		const HeaderContentTypeComponent = (
			<HeaderContentType
				className={customClass}
				category={Avo.ContentType.English.COLLECTION}
				label="collectie"
			/>
		);

		expect(shallow(HeaderContentTypeComponent).hasClass(customClass)).toBeTruthy();
	});
});
