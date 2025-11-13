import { shallow } from 'enzyme';

import { StickyEdgeBar } from './StickyEdgeBar';

describe('<StickyEdgeBar />', () => {
	it('Should be able to render', () => {
		shallow(<StickyEdgeBar />);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-sticky-edge-bar-custom';

		const stickyEdgeBarComponent = shallow(<StickyEdgeBar className={customClass} />);

		expect(stickyEdgeBarComponent.hasClass(customClass)).toBeTruthy();
		expect(stickyEdgeBarComponent.hasClass('c-sticky-edge-bar')).toBeTruthy();
	});
});
