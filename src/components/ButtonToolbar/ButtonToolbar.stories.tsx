import { times } from '../../helpers/times';
import { Button } from '../Button/Button';

import { ButtonToolbar } from './ButtonToolbar';

export default {
	title: 'components/ButtonToolbar',

	parameters: {
		jest: ['ButtonToolbar'],
	},
};

export const ButtonToolbar5Buttons = () => (
	<ButtonToolbar>
		<Button type="secondary" label="Test Button One" />
		<Button type="secondary" label="Test Button Two" />
		<Button type="secondary" label="Test Button Three" />
		<Button type="secondary" label="Test Button Four" />
		<Button type="secondary" label="Test Button Five" />
	</ButtonToolbar>
);

ButtonToolbar5Buttons.story = {
	name: 'ButtonToolbar 5 buttons',
};

export const ButtonToolbar2Buttons = () => (
	<ButtonToolbar>
		<Button type="secondary" label="Test Button One" />
		<Button type="secondary" label="Test Button Two" />
	</ButtonToolbar>
);

ButtonToolbar2Buttons.story = {
	name: 'ButtonToolbar 2 buttons',
};

export const ButtonToolbar1Buttons = () => (
	<ButtonToolbar>
		<Button type="secondary" label="Test Button One" />
	</ButtonToolbar>
);

ButtonToolbar1Buttons.story = {
	name: 'ButtonToolbar 1 buttons',
};

export const ButtonToolbarWrapping = () => (
	<ButtonToolbar>
		{times(20).map((index) => (
			<Button type="secondary" label="Test Button" key={`button-${index}`} />
		))}
	</ButtonToolbar>
);

ButtonToolbarWrapping.story = {
	name: 'ButtonToolbar wrapping',
};
