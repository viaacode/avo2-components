import { storiesOf } from '@storybook/react';
import React from 'react';

import { HeaderContentType } from './HeaderContentType';

storiesOf('components/HeaderContentType', module)
	.addParameters({ jest: ['HeaderContentType'] })
	.add('HeaderContentTypes', () => <HeaderContentType category="collection" label="collectie" />);
