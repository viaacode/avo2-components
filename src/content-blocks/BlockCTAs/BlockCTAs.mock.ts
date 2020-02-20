import { loremIpsum } from 'lorem-ipsum';

import { CTAProps } from '../../components/CTA/CTA';
import { action } from '../../helpers';

const content = loremIpsum({ count: 10 });

export const CTAS_MOCK: CTAProps[] = [
	{
		content,
		heading: 'CTA 1',
		headingType: 'h2',
		buttonLabel: 'Button 1',
		navigate: () => action('CTA 1'),
	},
	{
		content,
		heading: 'CTA 2',
		headingType: 'h2',
		buttonLabel: 'Button 2',
		navigate: () => action('CTA 2'),
	},
];
