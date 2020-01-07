import React from 'react';

import { storiesOf } from '@storybook/react';

import { CTA } from './CTA';
import { CTA_MOCK } from './CTA.mock';

storiesOf('CTA', module)
	.addParameters({ jest: ['CTA'] })
	.add('CTA', () => <CTA {...CTA_MOCK} />);
