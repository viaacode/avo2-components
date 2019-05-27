import { addDecorator, configure } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { withPadding } from './decorators/withPadding';
import { withRichText } from './decorators/withRichText';

import results from './test-results.json';

addDecorator(withTests({ results, filesExt: '((\\.specs?)|(\\.tests?))?(\\.tsx)?$' }));
addDecorator(withKnobs);
addDecorator(withSmartKnobs);
addDecorator(withPropsTable);
addDecorator(jsxDecorator);
addDecorator(withPadding);
addDecorator(withRichText);

function loadStories() {
	const req = require.context('../src', true, /.stories.tsx?$/);
	req.keys().forEach(req);
}

configure(loadStories, module);
