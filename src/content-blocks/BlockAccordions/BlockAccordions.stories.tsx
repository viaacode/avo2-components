import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockAccordions } from './BlockAccordions';
import { ACCORDIONS_MOCK } from './BlockAccordions.mock';

storiesOf('BlockAccordions', module)
	.addParameters({ jest: ['BlockAccordions'] })
	.add('BlockAccordions', () => <BlockAccordions elements={ACCORDIONS_MOCK} />);
