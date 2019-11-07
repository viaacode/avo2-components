import React from 'react';

import { storiesOf } from '@storybook/react';

import { HeaderContentType } from './HeaderContentType';

storiesOf('HeaderContentType', module)
	.addParameters({ jest: ['HeaderContentType'] })
	.add('HeaderContentTypes', () => <HeaderContentType category="collection" label="collectie" />);
