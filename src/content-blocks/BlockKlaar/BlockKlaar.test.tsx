import React from 'react';

import { shallow } from 'enzyme';

import { BlockKlaar } from './BlockKlaar';

const BlockKlaarExample = (
	<BlockKlaar date="DINSDAG 31 MAART" titles={['Dit is een leuke titel', 'Awesome']} />
);

describe('<BlockKlaar />', () => {
	it('Should be able to render', () => {
		shallow(BlockKlaarExample);
	});
});
