import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockMediaList } from './BlockMediaList';

storiesOf('blocks/BlockMediaList', module)
	.addParameters({ jest: ['BlockMediaList'] })
	.add('BlockLinks', () => <BlockMediaList elements={[]} />);
