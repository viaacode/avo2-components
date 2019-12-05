import { shallow } from 'enzyme';
import React from 'react';

import { Accordion } from './Accordion';

describe('<Accordion />', () => {
	const accordion = <Accordion isOpen />;

	it('should render', () => {
		shallow(accordion);
	});
});
