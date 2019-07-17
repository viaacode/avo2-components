import { shallow } from 'enzyme';
import React from 'react';

import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
	const tooltip = (
		<Tooltip index="3" placement="bottom">
			Tooltip text
		</Tooltip>
	);

	it('should render', () => {
		shallow(tooltip);
	});

	it('should set the correct placement className', () => {
		expect(shallow(tooltip).hasClass('c-tooltip--bottom')).toBeTruthy();
	});
});
