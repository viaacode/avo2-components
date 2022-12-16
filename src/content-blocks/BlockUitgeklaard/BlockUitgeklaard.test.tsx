import { shallow } from 'enzyme';
import React from 'react';

import { BlockUitgeklaard } from './BlockUitgeklaard';

const BlockUitgeklaardExample = (
	<BlockUitgeklaard date="2016-07-13T18:46:01.933Z" titles={['Dit is een leuke titel']} />
);

describe('<BlockUitgeklaard />', () => {
	it('Should be able to render', () => {
		shallow(BlockUitgeklaardExample);
	});
});
