import { action } from '../../helpers';

import { CTAProps } from './CTA';

export const CTA_MOCK: CTAProps = {
	heading: 'Titel',
	headingType: 'h3',
	content: 'Text',
	buttonLabel: 'Read more',
	buttonIcon: 'chevron-down',
	buttonAction: { type: 'CONTENT_PAGE', value: '1' },
	navigate: action('Clicked CTA button'),
};
