import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '../../helpers';

import { BlockCTAs } from './BlockCTAs';
import { CTAS_MOCK } from './BlockCTAs.mock';

const navigate = action('navigate to');
storiesOf('blocks/BlockCTAs', module)
	.addParameters({ jest: ['BlockCTAs'] })
	.add('BlockCTAs', () => <BlockCTAs elements={CTAS_MOCK} navigate={navigate} />)
	.add('BlockCTA single', () => <BlockCTAs elements={[CTAS_MOCK[0]]} navigate={navigate} />)
	.add('BlockCTA narrow', () => (
		<BlockCTAs elements={CTAS_MOCK} width="30%" navigate={navigate} />
	));
