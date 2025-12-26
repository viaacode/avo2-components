import { action } from '@storybook/addon-actions';
import { AvoCoreContentPickerType } from '@viaa/avo2-types';
import { testRenderLink } from '../../helpers';
import { LinkTarget } from '../../types';
import { IconNameSchema } from '../Icon/Icon.types';
import type { CTAPropsSchema } from './CTA';

export const CTA_MOCK: CTAPropsSchema = {
	heading: 'Titel',
	headingType: 'h3',
	content: 'Text',
	buttonLabel: 'Read more',
	buttonIcon: IconNameSchema.chevronDown,
	buttonAction: {
		target: LinkTarget.Blank,
		type: AvoCoreContentPickerType.EXTERNAL_LINK,
		value: 'http://google.com',
	},
	renderLink: testRenderLink(action('navigate to')),
};
