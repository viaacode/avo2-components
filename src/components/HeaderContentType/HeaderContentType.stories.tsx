import { storiesOf } from '@storybook/react';
import { Avo } from '@viaa/avo2-types';
import { HeaderContentType } from './HeaderContentType.js';

storiesOf('components/HeaderContentType', module)
	.addParameters({ jest: ['HeaderContentType'] })
	.add('HeaderContentTypes', () => (
		<HeaderContentType category={Avo.ContentType.English.COLLECTION} label="collectie" />
	));
