import { shallow } from 'enzyme';
import React from 'react';

import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
	const tooltipId = '3';
	const tooltip = (
		<Tooltip id={tooltipId} placement="bottom">
			Tooltip text
		</Tooltip>
	);

	it('should render', () => {
		shallow(tooltip);
	});

	it('should set the correct placement className', () => {
		expect(shallow(tooltip).hasClass('c-tooltip--bottom')).toBeTruthy();
	});

	it('should correctly pass the id prop', () => {
		expect(shallow(tooltip).find(`#tooltip-${tooltipId}`)).toHaveLength(1);
	});
});
