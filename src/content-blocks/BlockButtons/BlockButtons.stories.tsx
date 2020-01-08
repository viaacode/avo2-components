import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockButtons } from './BlockButtons';
import { BUTTONS_MOCK } from './BlockButtons.mock';

storiesOf('BlockButtons', module)
	.addParameters({ jest: ['BlockButtons'] })
	.add('BlockButtons', () => <BlockButtons buttons={BUTTONS_MOCK} />);
