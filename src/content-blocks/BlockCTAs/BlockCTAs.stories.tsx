import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockCTAs } from './BlockCTAs';
import { CTAS_MOCK } from './BlockCTAs.mock';

storiesOf('BlockCTAs', module)
	.addParameters({ jest: ['BlockCTAs'] })
	.add('BlockCTAs', () => <BlockCTAs elements={CTAS_MOCK} />);
