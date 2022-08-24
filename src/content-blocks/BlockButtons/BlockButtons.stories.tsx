import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { flatten, times } from 'lodash-es';
import React, { ReactNode } from 'react';

import { ButtonTypeSchema } from '../../components/Button/Button.types';
import { testRenderLink } from '../../helpers/render-link';
import { AlignOptions } from '../../types';

import { BlockButtons } from './BlockButtons';
import { BUTTONS_MOCK } from './BlockButtons.mock';

const renderBlockButtons =
	(align?: AlignOptions, dividers = false, type: ButtonTypeSchema = 'secondary') =>
	// eslint-disable-next-line react/display-name
	(): ReactNode =>
		(
			<BlockButtons
				elements={BUTTONS_MOCK.map((button) => ({ ...button, type }))}
				align={align}
				hasDividers={dividers}
				renderLink={testRenderLink(action('button clicked'))}
			/>
		);

storiesOf('blocks/BlockButtons', module)
	.addParameters({ jest: ['BlockButtons'] })
	.add('BlockButtons', renderBlockButtons())
	.add('BlockButtons (left)', renderBlockButtons('left'))
	.add('BlockButtons (center)', renderBlockButtons('center'))
	.add('BlockButtons (right)', renderBlockButtons('right'))
	.add('BlockButtons (dividers)', () => (
		<BlockButtons
			elements={flatten(times(20).map(() => BUTTONS_MOCK)).map((button) => ({
				...button,
				type: 'underlined-link',
			}))}
			align="center"
			hasDividers
			renderLink={testRenderLink(action('button clicked'))}
		/>
	));
