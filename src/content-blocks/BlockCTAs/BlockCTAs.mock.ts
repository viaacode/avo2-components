import { loremIpsum } from 'lorem-ipsum';

import { CTAProps } from '../../components/CTA/CTA';
import { action } from '../../helpers/action';
import { BUTTONS_MOCK } from '../BlockButtons/BlockButtons.mock';

const content = loremIpsum({ count: 10 });

export const CTAS_MOCK: CTAProps[] = [
	{
		content,
		heading: 'CTA 1',
		headingType: 'h2',
		buttonLabel: 'Button 1',
		buttonOnClick: action('Button 1 clicked'),
	},
	{
		content,
		heading: 'CTA 2',
		headingType: 'h2',
		buttonLabel: 'Button 2',
		buttonOnClick: action('Button 2 clicked'),
	},
];
