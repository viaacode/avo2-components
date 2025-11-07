import { action } from '@storybook/addon-actions';

import { testRenderLink } from '../../helpers/index.js';
import { LinkTarget } from '../../types/index.js';
import { IconNameSchema } from '../Icon/Icon.types.js';

import type { CTAPropsSchema } from './CTA.js';

export const CTA_MOCK: CTAPropsSchema = {
	heading: 'Titel',
	headingType: 'h3',
	content: 'Text',
	buttonLabel: 'Read more',
	buttonIcon: IconNameSchema.chevronDown,
	buttonAction: {
		target: LinkTarget.Blank,
		type: 'EXTERNAL_LINK',
		value: 'http://google.com',
	},
	renderLink: testRenderLink(action('navigate to')),
};
