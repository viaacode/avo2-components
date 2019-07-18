import { shallow } from 'enzyme';
import React from 'react';

import { Download, Slash, ThumbsUp } from '../Icons';
import { Alert } from './Alert';

describe('<Alert />', () => {
	const alert = (
		<Alert
			id="1"
			message="Alert message"
			options={{ type: 'info', dark: false }}
			close={() => {}}
		/>
	);

	it('should render', () => {
		shallow(alert);
	});
});
