import { Checkbox } from '../Checkbox/Checkbox';

import { CheckboxGroup } from './CheckboxGroup';

export default {
	title: 'components/CheckboxGroup',

	parameters: {
		jest: ['CheckboxGroup'],
	},
};

export const _CheckboxGroup = () => (
	<CheckboxGroup>
		<Checkbox label="Aluminium" />
		<Checkbox label="Cadmium" />
		<Checkbox label="Dubnium" />
	</CheckboxGroup>
);

_CheckboxGroup.story = {
	name: 'CheckboxGroup',
};

export const CheckboxGroupInline = () => (
	<CheckboxGroup inline={true}>
		<Checkbox label="Aluminium" />
		<Checkbox label="Cadmium" />
		<Checkbox label="Dubnium" />
	</CheckboxGroup>
);

CheckboxGroupInline.story = {
	name: 'CheckboxGroup inline',
};
