import { IconNameSchema } from '../Icon/Icon.types';
import { Spacer } from '../Spacer/Spacer';

import { Blankslate } from './Blankslate';

export default {
	title: 'components/Blankslate',

	parameters: {
		jest: ['Blankslate'],
	},
};

export const _Blankslate = () => (
	<Blankslate
		title="This is a blank slate"
		body="Use it to provide information when no dynamic content exists."
	/>
);

export const SpaciousBlankslate = () => (
	<Blankslate
		title="This is a spacious blank slate"
		body="Use it to provide information when no dynamic content exists."
		spacious
	/>
);

SpaciousBlankslate.story = {
	name: 'Spacious blankslate',
};

export const BlankslateWithIcon = () => (
	<Blankslate
		title="This is a blank slate"
		body="Use it to provide information when no dynamic content exists."
		icon={IconNameSchema.search}
	/>
);

BlankslateWithIcon.story = {
	name: 'Blankslate with icon',
};

export const BlankslateContent = () => (
	<Blankslate
		title="This is a blank slate"
		body="Use it to provide information when no dynamic content exists."
		icon={IconNameSchema.search}
	>
		<Spacer margin="top-large">
			Extra content for the blankslate can be passed via <code>children</code>.
		</Spacer>
	</Blankslate>
);

BlankslateContent.story = {
	name: 'Blankslate content',
};

export const BlankslateHtmlContent = () => (
	<Blankslate
		title="Oeps. Pagina niet gevonden"
		body="Sorry, we hebben overal gekeken, maar de pagina die je zoekt bestaat niet (meer) of je hebt geen rechten om deze te bekijken.<br /> Vermoed je een fout? Neem dan contact met ons op via de Feedback-knop."
		icon={IconNameSchema.search}
	/>
);

BlankslateHtmlContent.story = {
	name: 'Blankslate html content',
};
