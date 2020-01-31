import { loremIpsum } from 'lorem-ipsum';

import { CTAProps } from '../../components/CTA/CTA';
import { action } from '../../helpers';
import { ButtonAction } from '../../types';

const content = loremIpsum({ count: 10 });

export const CTAS_MOCK: CTAProps[] = [
	{
		content,
		heading: 'CTA 1',
		headingType: 'h2',
		buttonLabel: 'Button 1',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/hulp',
		},
		buildAndNavigate: (buttonAction: ButtonAction) => action(buttonAction.value.toString()),
	},
	{
		content,
		heading: 'CTA 2',
		headingType: 'h2',
		buttonLabel: 'Button 2',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/hulp',
		},
		buildAndNavigate: (buttonAction: ButtonAction) => action(buttonAction.value.toString()),
	},
];
