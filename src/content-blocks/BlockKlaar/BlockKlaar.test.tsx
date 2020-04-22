import React from 'react';

import { shallow } from 'enzyme';

import { BlockKlaar } from './BlockKlaar';

const BlockKlaarExample = (
	<BlockKlaar date="2016-07-13T18:46:01.933Z" elements={[{ title: 'Dit is een leuke titel' }]} />
);

describe('<BlockKlaar />', () => {
	it('Should be able to render', () => {
		shallow(BlockKlaarExample);
	});
});
