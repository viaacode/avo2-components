import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockTitle } from './BlockTitle';

const title = 'Main title';
export const blockTitleExample = <BlockTitle title={title} />;

storiesOf('BlockTitle', module)
	.addParameters({ jest: ['BlockTitle'] })
	.add('BlockTitle', () => blockTitleExample);
