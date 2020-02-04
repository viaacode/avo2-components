import React from 'react';

import { shallow } from 'enzyme';

import { BlockMediaList } from './BlockMediaList';

describe('<BlockMediaList />', () => {
	const BlockMediaListComponent = <BlockMediaList elements={[]} />;

	it('Should be able to render', () => {
		shallow(BlockMediaListComponent);
	});
});
