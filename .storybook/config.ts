import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import results from './test-results.json';

addDecorator(withTests({ results, filesExt: '((\\.specs?)|(\\.tests?))?(\\.tsx)?$' }));
addDecorator(withKnobs);
addDecorator(withSmartKnobs);
addDecorator(withPropsTable);
addDecorator(jsxDecorator);

function loadStories() {
	const req = require.context('../src', true, /.stories.tsx$/);
	req.keys().forEach(req);
}

configure(loadStories, module);
