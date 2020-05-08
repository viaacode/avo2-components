import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockCTAs } from './BlockCTAs';
import { CTAS_MOCK } from './BlockCTAs.mock';

storiesOf('blocks/BlockCTAs', module)
	.addParameters({ jest: ['BlockCTAs'] })
	.add('BlockCTAs', () => <BlockCTAs elements={CTAS_MOCK} />)
	.add('BlockCTA single', () => <BlockCTAs elements={[CTAS_MOCK[0]]} />)
	.add('BlockCTA narrow', () => <BlockCTAs elements={CTAS_MOCK} width="30%" />);
