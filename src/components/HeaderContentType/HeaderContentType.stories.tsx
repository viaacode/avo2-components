import { Avo } from '@viaa/avo2-types';
import { HeaderContentType } from './HeaderContentType.js';

export default {
	title: 'components/HeaderContentType',

	parameters: {
		jest: ['HeaderContentType'],
	},
};

export const HeaderContentTypes = () => (
	<HeaderContentType category={Avo.ContentType.English.COLLECTION} label="collectie" />
);

HeaderContentTypes.story = {
	name: 'HeaderContentTypes',
};
