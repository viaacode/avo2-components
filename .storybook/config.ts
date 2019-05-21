import { addDecorator, configure } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
	addDecorator(withPropsTable);
	req.keys().forEach(req);
}

configure(loadStories, module);
