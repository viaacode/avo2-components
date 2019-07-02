import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockSubtitle } from './BlockSubtitle';

const subtitle = 'Subtitle';

storiesOf('BlockSubtitle', module)
	.addParameters({ jest: ['BlockSubtitle'] })
	.add('BlockSubtitle', () => <BlockSubtitle subtitle={subtitle} />);
