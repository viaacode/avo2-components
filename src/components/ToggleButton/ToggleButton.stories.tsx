import React from 'react';

import { storiesOf } from '@storybook/react';

import { ToggleButton } from './ToggleButton';

storiesOf('ToggleButton', module)
	.addParameters({ jest: ['ToggleButton'] })
	.add('ToggleButton', () => <ToggleButton icon="heart" active={false} />)
	.add('ToggleButton active', () => <ToggleButton icon="bookmark" active={true} />);
