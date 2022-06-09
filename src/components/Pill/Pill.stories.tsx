import { storiesOf } from '@storybook/react';
import React from 'react';

import { Pill } from './Pill';
import { MOCK_PILL, MOCK_PILL__ACTIVE } from './Pill.mock';

storiesOf('components/Pill', module)
	.addParameters({ jest: ['Pill'] })
	.add('default', () => <Pill {...MOCK_PILL}>1024</Pill>)
	.add('active', () => <Pill {...MOCK_PILL__ACTIVE}>2048</Pill>);
