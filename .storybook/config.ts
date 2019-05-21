import { addDecorator, configure } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withPropsTable);
addDecorator(jsxDecorator);

function loadStories() {
	const req = require.context('../src', true, /.stories.tsx$/);
	req.keys().forEach(req);
}

configure(loadStories, module);
